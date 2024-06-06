import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/actions/order.js";
import { clearError, clearMessage } from "../../redux/reducers/orderReducer.js";
import { emptyState } from "../../redux/reducers/cartReducer.js";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { server } from "../../redux/store.js";
import { paymentVerification } from "../../redux/actions/order";


const ConfirmOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);
  const { message, error } = useSelector((state) => state.order);
  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total
        )
      );
    } else {
      const {data: { order, orderOptions }} = await axios.post(
        `${server}/createorderonline`,
        {
          shippingInfo,
          orderItems: cartItems,
          paymentMethod,
          itemsPrice: subTotal,
          taxPrice: tax,
          shippingCharges,
          totalAmount: total,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const options = {
        key: "rzp_test_AYqkFjETHtfsT8",
        amount: order.amount,
        currency: "INR",
        name: "Vada pav girl",
        description: "Vada pav a small business",
        order_id: order.id,
        handler: function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;
          dispatch(
            paymentVerification(
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
              orderOptions
            )
          );
        },

        theme: {
          color: "#9c003c",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    }
    };
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      dispatch(emptyState());
      navigate("/paymentsuccess");
    } else {
      dispatch(clearError());
      setDisableBtn(false);
    }
  }, [dispatch, message, navigate, error]);

  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div>
            <label htmlFor="">Cash on Delivery</label>
            <input
              type="radio"
              name="payment"
              onChange={() => {
                setPaymentMethod("COD");
              }}
            />
          </div>
          <div>
            <label htmlFor="">Online</label>
            <input
              type="radio"
              name="payment"
              onChange={() => {
                setPaymentMethod("Online");
              }}
            />
          </div>
          <button disabled={disableBtn} type="submit">
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
