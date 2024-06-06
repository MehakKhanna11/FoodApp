import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/user";
import Loader from "../layout/Loader";

const Profile = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 0,
    },
  };
  const logoutHandler = () => {
    dispatch(logout());
    // window.location="/"
  };
  return (
    <section className="profile">
      {loading === false ? (
        <main>
          <motion.img
            src={user.photo}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            alt="user"
          />
          <motion.h5
            transition={{ delay: 0.3 }}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {user.name}
          </motion.h5>
          {user.role === "admin" && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/admin/dashboard"
                style={{ borderRadius: 0, backgroundColor: "rgb(40,40,40)" }}
              >

                <MdDashboard /> Dashboard
              </Link>
            </motion.div>
          )}

          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Link to="/myorders">Orders</Link>
          </motion.div>
          <motion.button
            onClick={logoutHandler}
            transition={{ delay: 0.3 }}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Logout
          </motion.button>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Profile;
