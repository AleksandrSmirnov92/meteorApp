"use client";
import style from "./Content.module.css";
import { Rightbar } from "../Rigthbar/Rightbar";
import { Card } from "../Card/Card";
import { ContentProps, Asteroid } from "../../types";
import { useAsteroidContext } from "@/context/AsteroidContext";
import { useEffect } from "react";

export const Content: React.FC<ContentProps> = ({ data }) => {
  let { basketId, addAsteroidInBasket, toggleBar, setToggleBar } =
    useAsteroidContext();
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetch(
  //       `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-30&api_key=0kWkJf3IFmFhfq4wMUx2freKtjgajCDSgarc9zIo`
  //     );
  //     let responce = await data.json();
  //     console.log("data", responce);
  //   };
  //   const getDataBrouser = async () => {
  //     const data = await fetch(
  //       "http://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=1657&api_key=0kWkJf3IFmFhfq4wMUx2freKtjgajCDSgarc9zIo"
  //     );
  //     let responce = await data.json();
  //     console.log("browser", responce);
  //   };
  //   getData();
  //   getDataBrouser();
  // }, []);
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
