import { Asteroid } from "@/types";
export const calculationOfLunar = (lunar: string): string => {
  let l = Math.round(Number(lunar));
  if (l % 10 === 1) {
    return `${l} лунная орбита`;
  } else if (l % 10 <= 4) {
    return `${l} лунные орбиты`;
  } else {
    return `${l} лунных орбит`;
  }
};
export const ruDate = (date: string): string => {
  const currentDate = new Date(date);
  const ruDate = new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return ruDate.format(currentDate);
};
export const addInBasketAsteroid = (asteroid: Asteroid, basket: Asteroid[]) => {
  basket.push(asteroid);
};
export const currentDate = (date: Date): string => {
  const dateFormat: string = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  return dateFormat;
};
