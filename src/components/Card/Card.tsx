import Image from "next/image";
import { Button } from "../global/Button/Button";
import { calculationOfLunar, ruDate } from "../../utils/index";
import style from "./Card.module.css";
import Link from "next/link";
import { CardProps } from "../../types";
export const Card: React.FC<CardProps> = ({
  data,
  active_link_distance,
  addAsteroidInBasket,
  basketId,
  btnActive,
}) => {
  let { id, name, distance, approach_date, diameter } = data;
  return (
    <div className={style["card"]}>
      <h2>{ruDate(approach_date)}</h2>
      <div className={style["card__description"]}>
        <div>
          {active_link_distance ? (
            <span>{Math.round(Number(distance.killometers))} км</span>
          ) : (
            <span>{calculationOfLunar(distance.lunar)}</span>
          )}
          <Image alt="Arrow" src={"/Arrow.svg"} width={100} height={1} />
        </div>
        <Link href={`/asteroid/${id}`}>
          <Image
            alt="Meteor"
            src={"/meteor.svg"}
            width={Math.round(Number(distance.lunar)) > 100 ? 35 : 25}
            height={Math.round(Number(distance.lunar)) > 100 ? 35 : 25}
          />
        </Link>
        <div>
          <span className={style["card__description-year"]}>{name}</span>

          <span>Ø {Math.round(diameter)}</span>
        </div>
      </div>
      <div className={style["btn-container"]}>
        <Button
          text={!basketId?.includes(data.id) ? "Заказать" : "В корзине"}
          color={!basketId?.includes(data.id) ? "orange" : "orange-dark"}
          size="sml"
          handleClick={() => {
            addAsteroidInBasket!(data.id, {
              id,
              name,
              distance,
              approach_date,
              diameter,
            });
          }}
          display={btnActive ? "block" : "none"}
        />
        <Image src={"/warning.svg"} alt="warning" width={90} height={90} />
      </div>
    </div>
  );
};
