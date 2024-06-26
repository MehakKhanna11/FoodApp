import { asyncError } from "../middlewares/errorMiddleware.js";
import { Order } from "../models/order.js";
import ErrorHandler from "../utils/errorHandler.js";
import {instance} from "../server.js";
import {Payment} from "../models/payment.js"
import crypto from "crypto"
export const placeOrder = asyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;
  const user = req.user._id;
  const orderOption = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
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

export const placeOrderOnline=asyncError(async (req,res,next)=>{
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;
  const user = req.user._id;
  const orderOption = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  };

  const options={
    amount:Number(totalAmount)*100,
    currency:"INR",
  };
  const order=await instance.orders.create(options);

  res.status(201).json({
    order,
    orderOption,
    success: true,
  });
});
export const paymentVerification=asyncError(async (req,res,next)=>{
  const {razorpay_payment_id,razorpay_order_id,razorpay_signature,orderOption}=req.body;
  const body=razorpay_order_id+"|"+razorpay_payment_id;
  const expectedSignature=crypto.createHmac("sha256",process.env.RAZORPAY_SECRET).update(body).digest("hex");
  const isAuthentic=expectedSignature===razorpay_signature;
  let payment;
  if(isAuthentic){
    payment=await Payment.create({razorpay_order_id,razorpay_payment_id,razorpay_signature});
    await Order.create({...orderOption,paidAt: new Date(Date.now()),paymentInfo:payment._id})
  }
  else{
    return next(new ErrorHandler("Payment Failed",400))
  }
  res.status(201).json({success:true,message:`Order placed successfully via Online.
  Payment ID:${payment._id}`
})
})


export const getMyOrders = asyncError(async (req, res, next) => {
  const orders=await Order.find({
    user:req.user._id,
  }).populate("user","name");
  res.status(200).json({success:true,orders})
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



