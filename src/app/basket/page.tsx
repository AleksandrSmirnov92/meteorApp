"use client";
import MainBasketComp from "@/components/MainBasketComp/MainBasketComp";
import style from "./page.module.css";
import { useAsteroidContext } from "../../context/AsteroidContext";
const Basket = () => {
  const data = useAsteroidContext();
  return (
    <div className={style["basket-container"]}>
      <MainBasketComp />
    </div>
  );
};
export default Basket;
