import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style";
import dummy_food_img from "../assets/dummy_food_img.png";
import { spicy, vegetarian } from "../assets";
import { Sidebar } from "../components/Sidebar";
import { API_URL } from "../constants";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    axios
      .get(`${API_URL}/product/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const addProduct = () => {
    const order = {
      _id: product._id,
      name: product.name,
      price: product.price,
      qty: qty,
      image: product.imageUrl,
    }
    dispatch(addToCart(order));
    navigate("/cart")
  }

  if (product) {
    return (
      <div className="bg-white h-screen">
        <div className="sidebar-pos">
          <Sidebar />
        </div>
        <img src={product.imageUrl} className="w-screen py-[50px] px-[50px]" />
        <div className="bg-white rounded-tl-[40px] rounded-tr-[40px] shadow-inner">
          <div className="px-[40px] py-[40px] flex flex-col justify-between">
            <span className={`${styles.heading3} text-black py-2`}>
              {product.name}
            </span>
            <span className={`${styles.paragraph8} text-black py-2`}>
              {product.description}
            </span>
            <span className={`${styles.heading5} text-black pt-2`}>
              Ingredients
            </span>
            <span className={`${styles.paragraph8} text-black pt-1 pb-2`}>
              {product.ingredients}
            </span>
            <span className={`${styles.heading5} text-black pt-2`}>
              Allergens
            </span>
            <span className={`${styles.paragraph8} text-black pt-1 pb-2`}>
              {product.allergens}
            </span>
            {/* <div className="flex items-center py-2">
              {product.traits.map((trait, idx) => (
                <img src={trait} key={idx} className="pr-5" />
              ))}
            </div> */}
          </div>
        </div>
        <div className="absolute z-0 bottom-0 left-0 w-full h-[5rem] bg-yellow rounded-tl-[40px] rounded-tr-[40px] drop-shadow-[0_5px_30px_rgba(0,0,0,0.10)]">
          <div className="absolute z-10 p-8 w-full">
            <div className="heading flex flex-row text-left justify-around text-black">
              <span className={styles.heading4}>${product.price * qty}</span>
              <button
                className={`${styles.paragraph8} text-black rounded-[40px] w-[94px] flex flex-row justify-between`}
              >
                <span className={`${styles.paragraph8} text-black`} onClick={() => qty <= 1 ? qty : setQty(qty - 1)}>-</span>
                <span className={`${styles.paragraph8} text-black`}>{qty}</span>
                <span className={`${styles.paragraph8} text-black`} onClick={() => setQty(qty + 1)}>+</span>
              </button>
              <button
                className={`${styles.paragraph8} text-black rounded-[40px]`} onClick={addProduct}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
