"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Asteroid } from "../types";
interface Name {}

interface ContextProps {
  basket: Asteroid[];
  addAsteroidInBasket: (asteroid: Asteroid) => void;
}

export const AsteroidsContext = createContext<ContextProps>({
  basket: [],
  addAsteroidInBasket(asteroid) {},
});
export const useAsteroidContext = () => useContext(AsteroidsContext);

export const AsteroidProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<Asteroid[]>([]);
  const addAsteroidInBasket = (asteroid: Asteroid): any => {
    if (!basket.includes(asteroid)) {
      setBasket((prev) => [...prev, asteroid]);
    } else {
      let remove = basket.filter((item) => item.id !== asteroid.id);
      setBasket(remove);
      console.log("Обьект уже есть в корзине");
    }
  };
  return (
    <AsteroidsContext.Provider value={{ basket, addAsteroidInBasket }}>
      {children}
    </AsteroidsContext.Provider>
  );
};
