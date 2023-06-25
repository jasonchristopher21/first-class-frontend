import React, { useState } from "react";
import styles from "../style";
import { flight_path, big_deal } from "../assets";
import dummy_food_img from "../assets/dummy_food_img.png";
import { Link } from "react-router-dom";

export const Main = () => {
  const [flightNumber, setFlightNumber] = useState("TR252");
  const [passengerName, setPassengerName] = useState("Florentiana Yuwono");
  const [seat, setSeat] = useState("21F");

  const [fromCity, setFromCity] = useState("Singapore");
  const [fromCityCode, setFromCityCode] = useState("SIN");
  const [fromTime, setFromTime] = useState("10.55");
  const [toCity, setToCity] = useState("Pekanbaru");
  const [toCityCode, setToCityCode] = useState("PKU");
  const [toTime, setToTime] = useState("11.00");

  const deals = [
    {
      image: big_deal,
      name: "Big Deal Deal",
      description: "Be a Scoot member to gain more exciting deals!",
    },
    {
      image: big_deal,
      name: "Free Nachos",
      description: "Free Nachos for every purchase of 1.5 Coca Cola",
    },
    {
      image: big_deal,
      name: "Free Chips",
      description: "Free Chips for every purchase of 1.5 Coca Cola",
    },
  ];

  const items = [
    {
      image: dummy_food_img,
      name: "Signature Laksa",
      price: "8.50",
    },
    {
      image: dummy_food_img,
      name: "Nasi Lemak",
      price: "8.50",
    },
    {
      image: dummy_food_img,
      name: "Nasi Padang",
      price: "8.50",
    },
    {
      image: dummy_food_img,
      name: "Lontong Sayur",
      price: "8.50",
    },
  ];

  return (
    <div className="bg-light-grey">
      <div className="absolute z-0 top-0 left-0 w-full h-[10rem] bg-yellow rounded-bl-[40px] rounded-br-[40px] drop-shadow-[0_5px_30px_rgba(0,0,0,0.10)]" />
      <div className="absolute z-10 p-10 w-full">
        <div className="heading flex flex-col text-left text-black">
          <span className={styles.paragraph6}>
            Welcome onboard {flightNumber},
          </span>
          <span className={styles.heading3}>{passengerName}</span>
        </div>

        <div className="order-card flex flex-col gap-0.5 p-5 mt-5 bg-white w-full text-black rounded-2xl">
          <div className="flex flex-row justify-between">
            <span className={styles.heading3}>{fromCityCode}</span>
            <img src={flight_path} />
            <span className={styles.heading3}>{toCityCode}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className={styles.paragraph7}>{fromCity}</span>
            <span className={styles.paragraph7}>{toCity}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className={styles.paragraph8}>{toTime}</span>
            <span className={styles.paragraph8}>{toTime}</span>
          </div>
          <div className="pt-1.5 mb-1.5 border-b border-b-black opacity-20"></div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-evenly">
              <span className={styles.paragraph8}>
                Flight No.
                <span className={styles.heading5}> {flightNumber} </span>
              </span>
            </div>
            <div className="flex flex-row justify-between"></div>
            <span className={styles.paragraph8}>
              Seat No.
              <span className={styles.heading5}> {seat} </span>
            </span>
          </div>
        </div>

        <div className="mt-7">
          <span className={`${styles.heading3} text-black`}>Popular Deals</span>
          <div className="flex flex-nowrap gap-2 overflow-x-scroll no-scrollbar mt-4 -mx-10">
            <div className="ml-8" />
            {deals.map((deal, idx) => (
              <DealCard deal={deal} key={idx} />
            ))}
          </div>
        </div>

        <div className="mt-7">
          <span className={`${styles.heading3} text-black`}>Categories</span>
          <div className="grid grid-cols-2 gap-4 overflow-y-scroll no-scrollbar mt-4">
            {items.map((item, idx) => (
              <Link to="/product/" key={idx}>
              <ItemCard item={item} key={idx} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DealCard = (props) => {
  const deal = props.deal;
  return (
    <div>
      <div className="flex-none px-2 rounded-lg w-[180px]">
        <img src={deal.image} />
        <div className="flex flex-col justify-between px-2 py-2 rounded-b-lg bg-white">
          <span className={styles.heading5}>{deal.name}</span>
          <span className={styles.paragraph9}>{deal.description}</span>
        </div>
      </div>
    </div>
  );
};

const ItemCard = (props) => {
  const item = props.item;
  return (
    <div className="flex flex-col gap-2 bg-white px-3 py-3 rounded-lg">
      <img src={item.image} className="my-auto" />
      <div className="flex flex-col justify-between text-black">
        <span className={`${styles.heading5} my-auto`}>{item.name}</span>
        <span className={`${styles.paragraph8} my-auto`}>${item.price}</span>
      </div>
    </div>
  );
};
