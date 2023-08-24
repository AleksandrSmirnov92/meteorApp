import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../global/Button/Button";
import { calculationOfLunar, ruDate } from "../../utils/index";
import style from "./Card.module.css";

export const Card: React.FC<any> = ({
  id,
  name,
  diameter,
  distanse,
  active_distance,
  handleClick,
}) => {
  let asteroid = { id, name, diameter, distanse, active_distance };
  return (
    <div className={style["card"]}>
      <h2>{ruDate("2023-08-22")}</h2>
      <div className={style["card__description"]}>
        <div>
          {active_distance ? (
            <span>{Math.round(Number(5))} км</span>
          ) : (
            <span>{calculationOfLunar("5")}</span>
          )}
          <Image alt="Arrow" src={"/Arrow.svg"} width={100} height={1} />
        </div>
        <Image alt="Meteor" src={"/meteor.svg"} width={30} height={30} />
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
          handleClick={() => handleClick(asteroid)}
        />
        <Image src={"/warning.svg"} alt="warning" width={90} height={90} />
      </div>
    </div>
  );
};
