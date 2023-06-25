import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "../style";
import dummy_food_img from "../assets/dummy_food_img.png";
import { spicy, vegetarian } from "../assets";
import { Sidebar } from "../components/Sidebar";

export const Product = () => {
  const { id } = useParams();

  const items = [
    {
      id: 1,
      image: dummy_food_img,
      name: "Signature Laksa",
      description:
        "A local Singapore favourite! This delicious bowl of Laksa broth, paired with thick bee hoon noodles offers the right balance of spice and coconut milk.",
      ingredients:
        "Rice Noodles, Coconut Milk, Shrimp, Chilli Peppers, Turmeric, Assam, Eggs, Tofu, Beansprouts, Coriander Leaves",
      allergens: "Eggs, Tree Nuts, Soy, Fish, Crustacean",
      traits: [spicy, vegetarian],
      price: "8.50",
    },
    {
      id: 2,
      image: dummy_food_img,
      name: "Nasi Lemak",
      description: "Truly the infamous dish of South East Asia.",
      ingredients:
        "Rice, Chicken, Coconut Milk, Shrimp, Chilli Peppers, Turmeric, Assam, Eggs, Tofu, Beansprouts, Coriander Leaves",
      allergens: "Eggs, Tree Nuts, Soy, Fish, Crustacean",
      traits: [spicy],
      price: "8.50",
    },
    {
      id: 3,
      image: dummy_food_img,
      name: "Nasi Padang",
      description:
        "Indulge yourself in one of the most iconic lunch in Indonesia. The curry taste mixed with grilled chicken and hot rice will surely make your day.",
      ingredients:
        "Rice, Chicken, Coconut Milk, Shrimp, Chilli Peppers, Turmeric, Assam, Eggs, Tofu, Beansprouts, Coriander Leaves",
      allergens: "Eggs, Tree Nuts, Soy, Fish, Crustacean",
      traits: [spicy],
      price: "8.50",
    },
    {
      id: 4,
      image: dummy_food_img,
      name: "Lontong Sayur",
      description:
        "Getting creative with your rice? Lontong is surely going to make you experience new taste of rice. It is famously eaten during breakfast, but lunch will do too!",
      ingredients:
        "Rice, Coconut Milk, Shrimp, Chilli Peppers, Turmeric, Assam, Eggs, Tofu, Beansprouts, Coriander Leaves",
      allergens: "Eggs, Tree Nuts, Soy, Fish, Crustacean",
      traits: [spicy, vegetarian],
      price: "8.50",
    },
  ];

  const product = items.find((item) => {
    return item.id === parseInt(id);
  });

  return (
    <div className="bg-white h-screen">
      <div className="sidebar-pos">
        <Sidebar />
      </div>
      <img src={product.image} className="w-screen py-[50px] px-[50px]" />
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
          <div className="flex items-center py-2">
            {product.traits.map((trait, idx) => (
              <img src={trait} key={idx} className="pr-5" />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute z-0 bottom-0 left-0 w-full h-[5rem] bg-yellow rounded-tl-[40px] rounded-tr-[40px] drop-shadow-[0_5px_30px_rgba(0,0,0,0.10)]">
        <div className="absolute z-10 p-8 w-full">
          <div className="heading flex flex-row text-left justify-around text-black">
            <span className={styles.heading4}>${product.price}</span>
            <button className={`${styles.paragraph8} text-black rounded-[40px] w-[94px] flex flex-row justify-between`}>
                <span className={`${styles.paragraph8} text-black`}>-</span>
                <span className={`${styles.paragraph8} text-black`}>1</span>
                <span className={`${styles.paragraph8} text-black`}>+</span>
            </button>
            <button className={`${styles.paragraph8} text-black rounded-[40px]`}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
