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
interface ContextProps {
  basketId: string[];
  asteroidsInBasket: Asteroid[];
  addAsteroidInBasket: (asteroidId: string, asteroid: any) => void;
  toggleBar: boolean;
  setToggleBar: Dispatch<SetStateAction<boolean>>;
}

export const AsteroidsContext = createContext<ContextProps>({
  basketId: [],
  asteroidsInBasket: [],
  addAsteroidInBasket(asteroidId) {},
  toggleBar: true,
  setToggleBar() {},
});
export const useAsteroidContext = () => useContext(AsteroidsContext);

export const AsteroidProvider = ({ children }: { children: ReactNode }) => {
  const [basketId, setBasket] = useState<string[]>(
    localStorage.getItem("asteroidId")
      ? JSON.parse(localStorage.getItem("asteroidId")!)
      : []
  );
  const [asteroidsInBasket, setAsteroidsInBasket] = useState<Asteroid[]>(
    localStorage.getItem("asteroidsInBasket")
      ? JSON.parse(localStorage.getItem("asteroidsInBasket")!)
      : []
  );
  const [toggleBar, setToggleBar] = useState(true);
  const addAsteroidInBasket = (
    asteroidId: string,
    asteroid: Asteroid
  ): void => {
    if (basketId.includes(asteroidId)) {
      let removeId = basketId.filter((item) => item !== asteroidId);
      setBasket(removeId);
      localStorage.setItem("asteroidId", JSON.stringify(removeId));
      let removeAsteroidFromBasket = asteroidsInBasket.filter(
        (item: any) => item.id !== asteroidId
      );
      setAsteroidsInBasket(removeAsteroidFromBasket);
      localStorage.setItem(
        "asteroidsInBasket",
        JSON.stringify(removeAsteroidFromBasket)
      );
    } else {
      setBasket((prev) => [...prev, asteroidId]);
      localStorage.setItem(
        "asteroidId",
        JSON.stringify([...basketId, asteroidId])
      );
      setAsteroidsInBasket((prev) => [...prev, asteroid]);
      localStorage.setItem(
        "asteroidsInBasket",
        JSON.stringify([...asteroidsInBasket, asteroid])
      );
    }
  };

  return (
    <AsteroidsContext.Provider
      value={{
        asteroidsInBasket,
        basketId,
        addAsteroidInBasket,
        toggleBar,
        setToggleBar,
      }}
    >
      {children}
    </AsteroidsContext.Provider>
  );
};
