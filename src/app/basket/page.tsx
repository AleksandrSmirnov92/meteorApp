"use client";
import { useAsteroidContext } from "../../context/AsteroidContext";
const Basket = () => {
  const data = useAsteroidContext();
  console.log(data.data.then((state) => console.log(state[0])));
  return <div>Тут будут все заказы из корзины</div>;
};
export default Basket;
