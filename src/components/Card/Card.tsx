import Image from "next/image";
import { basket } from "../../store/Basket";
import { Button } from "../global/Button/Button";
import {
  calculationOfLunar,
  ruDate,
  addInBasketAsteroid,
} from "../../utils/index";
import style from "./Card.module.css";
import Link from "next/link";
import { CardProps } from "../../types";
export const Card: React.FC<CardProps> = ({ data, active_link_distance }) => {
  let { id, name, distanse } = data;
  return (
    <div className={style["card"]}>
      <h2>{ruDate("2023-08-22")}</h2>
      <div className={style["card__description"]}>
        <div>
          {active_link_distance ? (
            <span>{Math.round(Number(distanse.killometers))} км</span>
          ) : (
            <span>{calculationOfLunar(distanse.lunar)}</span>
          )}
          <Image alt="Arrow" src={"/Arrow.svg"} width={100} height={1} />
        </div>
        <Link href={`/asteroid/${id}`}>
          <Image alt="Meteor" src={"/meteor.svg"} width={35} height={35} />
        </Link>
        <div>
          <span className={style["card__description-year"]}>{name}</span>

          <span>Ø {Math.round(22)}</span>
        </div>
      </div>
      <div className={style["btn-container"]}>
        <Button
          text={"Заказать"}
          color="orange"
          size="sml"
          handleClick={() => {
            addInBasketAsteroid(data, basket);
          }}
        />
        <Image src={"/warning.svg"} alt="warning" width={90} height={90} />
      </div>
    </div>
  );
};
