"use client";
import style from "./Content.module.css";
import { Rightbar } from "../Rigthbar/Rightbar";
import { Card } from "../Card/Card";
import { ContentProps, Asteroid } from "../../types";
import { useAsteroidContext } from "@/context/AsteroidContext";

export const Content: React.FC<ContentProps> = ({ data }) => {
  let { basketId, addAsteroidInBasket, toggleBar, setToggleBar } =
    useAsteroidContext();

  return (
    <div className={style["content-container"]}>
      <div className={style.content}>
        <h2>
          Ближайшие подлёты <br /> астероидов
        </h2>
        <pre className={style.toggleBar}>
          <button
            onClick={() => {
              setToggleBar(true);
            }}
            className={`${style[`toggleBar-btn`]} ${
              style[
                `${
                  toggleBar ? "toggleBar-btn_active" : "toggleBar-btn_inactive"
                }`
              ]
            }`}
          >
            <span>В километрах</span>
          </button>
          <span>{" | "}</span>
          <button
            onClick={() => setToggleBar(false)}
            className={`${style[`toggleBar-btn`]} ${
              style[
                `${
                  !toggleBar ? "toggleBar-btn_active" : "toggleBar-btn_inactive"
                }`
              ]
            }`}
          >
            <span>В лунных арбитах</span>
          </button>
        </pre>
        <div className={style["card-container"]}>
          <>
            {data.map((item: Asteroid) => (
              <Card
                key={item.id}
                data={item}
                active_link_distance={toggleBar}
                addAsteroidInBasket={addAsteroidInBasket}
                basketId={basketId}
                btnActive={true}
              />
            ))}
          </>
          <Rightbar basketId={basketId} />
        </div>
      </div>
    </div>
  );
};
