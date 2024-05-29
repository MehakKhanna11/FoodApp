import { asyncError } from "../middlewares/errorMiddleware.js";
import { Order } from "../models/order.js";
import ErrorHandler from "../utils/errorHandler.js";
export const placeOrder = asyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;
  const user = '665474edb2274b45b7e2cd31';
  const orderOption = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  };
  await Order.create(orderOption);
  res.status(201).json({
    message: "Order placed successfully via Cash on Delivery",
    success: true,
  });
});

export const getMyOrders = asyncError(async (req, res, next) => {
  const orders=await Order.find({
    user:req.user._id,
  }).populate("user","name");
  res.status(200).json({success:true,orders,})
});




export const getOrderDetails=asyncError(async(req,res,next)=>{
  const order=await Order.findById(req.params.id).populate("user","name");
  if(!order){
    return new ErrorHandler("Invalid Order ID",404);
  }
  res.status(200).json({success:true,order,})
})





export const getAdminOrders = asyncError(async (req, res, next) => {
  const orders=await Order.find({}).populate("user","name");
  res.status(200).json({success:true,orders,})
});


export const processOrder=asyncError(async(req,res,next)=>{
  const order=await Order.findById(req.params.id)
  if(!order){
    return new ErrorHandler("Invalid Order ID",404);
  }
  if(order.orderStatus==="Preparing"){
    order.orderStatus="Shipped";
  }
  else if(order.orderStatus==="Shipped"){
    order.orderStatus="Delivered";
    order.deliveredAt=new Date(Date.now());
  }
  else if(order.orderStatus==="Delivered"){
    return next(new ErrorHandler("Food Already Delivered",400));
  }
  await order.save();

  res.status(200).json({success:true,message:"Status updated successfully"})
})