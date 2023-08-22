import style from "./rightbar.module.css";
import { Button } from "../global/Button/Button";
export const Rightbar: React.FC = () => {
  return (
    <div className={style["rightbar-container"]}>
      <span className={style["rightbar-title"]}>
        Корзина
        <br />
        <span>2 астероида</span>
      </span>
      <div className={style["rightbar-btn"]}>
        <Button text={"Отправить"} color={"orange"} size={"lrg"} />
      </div>
    </div>
  );
};
