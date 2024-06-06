import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOrders, processOrder } from "../../redux/actions/admin";
import Loader from "../layout/Loader";
import { clearError, clearMessage } from "../../redux/reducers/adminReducer";
import toast from "react-hot-toast"
const Orders = () => {
  const dispatch=useDispatch();
  const {orders,loading,message,error}=useSelector(state=>state.admin);
  
  const processOrderHanlder=(id)=>{
    dispatch(processOrder(id));
  };

  useEffect(()=>{
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    dispatch(getAdminOrders());
  },[dispatch,message,error]);



  return (
    <section className="tableClass">
      {
        loading===false?      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders && orders.map((i) => (
              <tr key={i}>
                    <td>#{i._id}</td>
                    <td>{i.orderStatus}</td>
                    <td>
                      {i.orderItems.cheeseVadapav.quantity +
                        i.orderItems.vegVadapav.quantity +
                        i.orderItems.specialVadapav.quantity}
                    </td>
                    <td>₹{i.totalAmount}</td>
                    <td>{i.paymentMethod}</td>
                    <td>{i.user.name}</td>

                <td>
                  <Link to={`/order/${i._id}`}>
                    <AiOutlineEye />
                  </Link>

                <button onClick={()=>{processOrderHanlder(i._id)}}>
                    <GiArmoredBoomerang />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>:<Loader/>
      }

    </section>
  );
};

export default Orders;
