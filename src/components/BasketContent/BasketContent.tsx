"use client";
import style from "./BasketContent.module.css";
import { Card } from "../Card/Card";
import { useAsteroidContext } from "@/context/AsteroidContext";
import { Asteroid } from "@/types";

const BasketContent = () => {
  const { basketId, toggleBar, asteroidsInBasket } = useAsteroidContext();

  return (
    <div className={style["basket-container"]}>
      <div className={style.content}>
        <h2>{basketId.length > 0 ? "Заказ отправлен!" : "Корзина пуста!"}</h2>
        <div className={style["card-container"]}>
          {asteroidsInBasket.map((item: Asteroid) => (
            <Card
              key={item.id}
              data={item}
              btnActive={false}
              active_link_distance={toggleBar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BasketContent;
