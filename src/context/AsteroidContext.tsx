"use client";
import { createContext, useContext, ReactNode, useState } from "react";
// import { Asteroid } from "../types";
interface Name {}
interface ContextProps {
  data: Promise<Name[]>;
  basket: Name[];

  addAsteroidInBasket: (asteroid: Name) => void;
}
export async function getServerSideProps() {
  return [
    {
      name: "Sasha",
      lastName: "Smirnov",
    },
  ];
}

export const AsteroidsContext = createContext<ContextProps>({
  data: new Promise(() => {}),
  basket: [],
  addAsteroidInBasket(asteroid) {},
});
export const useAsteroidContext = () => useContext(AsteroidsContext);

export const AsteroidProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState([]);
  const data = getServerSideProps();

  const addAsteroidInBasket = (asteroid: any): void => {};
  return (
    <AsteroidsContext.Provider value={{ data, basket, addAsteroidInBasket }}>
      {children}
    </AsteroidsContext.Provider>
  );
};
