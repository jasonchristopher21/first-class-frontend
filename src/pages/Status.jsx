import React, { useState, useEffect } from "react";
import styles from "../style";
import dummy_food_img from "../assets/dummy_food_img.png";
import cart_black from "../assets/cart-black.svg";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

import preparing from "../assets/status/preparing.png";
import serving from "../assets/status/serving.png";
import completed from "../assets/status/completed.png";

import { useSelector, useDispatch } from "react-redux";

const Status = () => {
  const [seat, setSeat] = useState("21F");

  const [status, setStatus] = useState("received");

  const [total, setTotal] = useState(0);

  const { id } = useParams();

  const orders = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    let subtotal = 0;
    orders.map((order) => {
      subtotal += order.price * order.qty;
    });
    setTotal(subtotal);
  }, []);

  return (
    <div className="bg-light-grey">
      <div className="sidebar-pos">
        <Sidebar />
      </div>
      <div className="absolute z-0 top-0 left-0 w-full h-[10rem] bg-yellow rounded-bl-[40px] rounded-br-[40px] drop-shadow-[0_5px_30px_rgba(0,0,0,0.10)]" />
      <div className="absolute z-10 p-10 w-full">
        <div className="heading flex flex-col text-left text-black">
          <span className={styles.heading3}>
            Order {status[0].toUpperCase() + status.substring(1)}!
          </span>
          <span className={`${styles.paragraph6} max-w-[75%] leading-tight`}>
            Sit tight and relax, your order will be delivered shortly
          </span>
        </div>

        <div className="order-card flex flex-col gap-0.5 p-5 mt-5 bg-white w-full text-black rounded-2xl">
          {status === "received" ? (
            <img src={preparing} alt="cart" />
          ) : status === "serving" ? (
            <img src={serving} alt="cart" />
          ) : status === "completed" ? (
            <img src={completed} alt="cart" />
          ) : null}
        </div>

        <div className="mt-7">
          <span className={`${styles.heading3} text-black`}>Orders</span>
          <div className="order-cards flex flex-col gap-0.5 px-5 py-2 mt-4 bg-white w-full text-black rounded-2xl divide-y divide-[#00000020]">
            {orders.map((order, idx) => (
              <OrderCard order={order} key={idx} />
            ))}
          </div>
        </div>

        <div className="mt-7">
          <div className="flex flex-col">
            <span className={`${styles.heading3} text-black`}>Details</span>

            <div className="order-card flex flex-col gap-0.5 p-5 mt-4 bg-white w-full text-black rounded-2xl">
              <div className="flex flex-row justify-between">
                <span className={styles.paragraph7}>Passenger Surname</span>
                <span className={styles.paragraph8}>{user.surname}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className={styles.paragraph7}>Seat Number</span>
                <span className={styles.paragraph8}>21F</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className={styles.paragraph7}>Amount Payable</span>
                <span className={styles.heading5}>${total.toFixed(2)}</span>
              </div>
              <div className="pt-1.5 mb-1.5 border-b border-b-black opacity-20"></div>
              <div className="flex flex-row justify-between">
                <span className={styles.paragraph7}>Order ID</span>
                <span className={styles.heading5}>{id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderCard = (props) => {
  const order = props.order;
  return (
    <div className="flex gap-6 py-3">
      <img src={order.image} className="h-16 w-16" />
      <div className="flex flex-col gap-1 w-full my-auto">
        <span className={styles.heading5}>{order.name}</span>
        <div className="flex flex-row gap-3">
          <span className={styles.paragraph2}>${order.price}</span>
          <span className={`${styles.paragraph2} text-dark-grey`}>
            x{order.qty}
          </span>
        </div>
      </div>
    </div>
  );
};

const AddOnCard = (props) => {
  const item = props.item;
  return (
    <div className="flex flex-col gap-2 bg-white px-4 pt-4 pb-2 rounded-lg">
      <img src={item.image} className="my-auto" />
      <div className="flex flex-row justify-between gap-4 text-black">
        <span className={`${styles.heading5} my-auto`}>{item.name}</span>
        <span className={`${styles.paragraph8} my-auto`}>${item.price}</span>
      </div>
    </div>
  );
};

export default Status;
