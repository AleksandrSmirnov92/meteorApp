import style from "./rightbar.module.css";
import { Button } from "../global/Button/Button";
import Link from "next/link";
export const Rightbar: React.FC = () => {
  return (
    <div className={style["rightbar-container"]}>
      <span className={style["rightbar-title"]}>
        Корзина
        <br />
        <span>2 астероида</span>
      </span>
      <div className={style["rightbar-btn"]}>
        <Link href={"/basket"} className={style["rightbar-link"]}>
          <Button text={"Отправить"} color={"orange"} size={"lrg"} />
        </Link>
      </div>
    </div>
  );
};
