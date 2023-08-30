"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextProps {
  basket: string[];
  addAsteroidInBasket: (asteroid: string) => void;
  toggleBar: boolean;
  setToggleBar: Dispatch<SetStateAction<boolean>>;
}

export const AsteroidsContext = createContext<ContextProps>({
  basket: [],
  addAsteroidInBasket(asteroid) {},
  toggleBar: true,
  setToggleBar() {},
});
export const useAsteroidContext = () => useContext(AsteroidsContext);

export const AsteroidProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<string[]>(
    localStorage.getItem("asteroid")
      ? JSON.parse(localStorage.getItem("asteroid")!)
      : []
  );
  const [toggleBar, setToggleBar] = useState(true);
  const addAsteroidInBasket = (asteroid: string): void => {
    if (basket.includes(asteroid)) {
      let remove = basket.filter((item) => item !== asteroid);
      setBasket(remove);
      localStorage.setItem("asteroid", JSON.stringify(remove));
    } else {
      setBasket((prev) => [...prev, asteroid]);
      localStorage.setItem("asteroid", JSON.stringify([...basket, asteroid]));
    }
  };

  return (
    <AsteroidsContext.Provider
      value={{ basket, addAsteroidInBasket, toggleBar, setToggleBar }}
    >
      {children}
    </AsteroidsContext.Provider>
  );
};
