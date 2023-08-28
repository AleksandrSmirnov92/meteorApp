"use client";
import { useAsteroidContext } from "../../context/AsteroidContext";
const Basket = () => {
  const data = useAsteroidContext();
  console.log(data);
  return <div>Тут будут все заказы из корзины</div>;
};
export default Basket;
