import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../redux/actions/order";
import Loader from "../layout/Loader";
import { clearError } from "../../redux/reducers/ordersReducer";
import toast from "react-hot-toast";
const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    dispatch(getMyOrders());
  }, [dispatch, error]);

  return (
    <section className="tableClass orders">
      {loading === false ? (
        <main>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Order Status</th>
                <th>Item Qty.</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((i) => {
                  return (
                    <tr key={i._id}>
                      <td>{i._id}</td>
                      <td>{i.orderStatus}</td>
                      <td>
                        {i.orderItems.cheeseVadapav.quantity +
                          i.orderItems.vegVadapav.quantity +
                          i.orderItems.specialVadapav.quantity}
                      </td>
                      <td>₹{i.totalAmount}</td>
                      <td>{i.paymentMethod}</td>
                      <td>
                        <Link to={`/order/${i._id}`}>
                          <AiOutlineEye />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default MyOrders;
