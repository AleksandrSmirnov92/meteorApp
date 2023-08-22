import Image from "next/image";
import { Button } from "../global/Button/Button";
import style from "./Card.module.css";
interface Props {
  name: string;
  diameter: number;
}
export const Card: React.FC<Props> = ({ name, diameter }) => {
  return (
    <div className={style["card"]}>
      <h2>12 сент 2023</h2>
      <div className={style["card__description"]}>
        <div>
          <span>Три лунные орбиты</span>
          <Image alt="Arrow" src={"/Arrow.svg"} width={100} height={1} />
        </div>
        <Image alt="Meteor" src={"/meteor.svg"} width={30} height={30} />
        <div>
          <span className={style["card__description-year"]}>{name}</span>

          <span>Ø {Math.round(diameter)}</span>
        </div>
      </div>
      <div className={style["btn-container"]}>
        <Button text={"Заказать"} color="orange" size="sml" />
        <Image src={"/warning.svg"} alt="warning" width={90} height={90} />
      </div>
    </div>
  );
};
