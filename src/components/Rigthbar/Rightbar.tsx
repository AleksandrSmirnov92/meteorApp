import style from "./rightbar.module.css";
import { Button } from "../global/Button/Button";
import Link from "next/link";
import { RightbarProps } from "../../types";

export const Rightbar = ({ basket }: RightbarProps) => {
  return (
    <div className={style["rightbar-container"]}>
      <span className={style["rightbar-title"]}>
        Корзина
        <br />
        <span>{basket?.length} астероида</span>
      </span>
      <div className={style["rightbar-btn"]}>
        <Link href={"/basket"} className={style["rightbar-link"]}>
          <Button text={"Отправить"} color={"orange"} size={"lrg"} />
        </Link>
      </div>
    </div>
  );
};
