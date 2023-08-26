"use client";
import style from "./Content.module.css";
import { Rightbar } from "../Rigthbar/Rightbar";
import { Card } from "../Card/Card";
import { useState } from "react";
import { ContentProps, Asteroid } from "../../types";

export const Content: React.FC<ContentProps> = ({ data }) => {
  let [toggleBar, setToggleBar] = useState(true);

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
              />
            ))}
          </>
          <Rightbar />
        </div>
      </div>
    </div>
  );
};
