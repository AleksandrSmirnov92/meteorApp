"use client";
import style from "./main.module.css";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { Asteroid } from "../Main/Asteroid/Asteroid";

export const Main: React.FC = () => {
  let [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    let date = new Date();
    let dateFormat: string = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    async function getInfoAsteroid() {
      // const res = await fetch(
      //   "https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-18&api_key=0kWkJf3IFmFhfq4wMUx2freKtjgajCDSgarc9zIo"
      // );
      // const response: any = await res.json();
      // console.log(
      //   response.near_earth_objects[
      //     `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      //       2,
      //       "0"
      //     )}-${String(date.getDate()).padStart(2, "0")}`
      //   ]
      // );
      // setAsteroids(response.near_earth_objects[dateFormat]);
    }
    getInfoAsteroid();
  }, [asteroids]);
  return (
    <div className={style.main__wrapper}>
      <div className={style.main__container}>
        <div className={style.main__description}>
          <h2>
            Ближайшие подлёты
            <br /> астероидов
          </h2>
          <div className={style["main__description-toggle"]}>
            <button className={style["btn-toggle"]}>
              <span>В километрах</span>
            </button>
            {<pre>{" | "}</pre>}
            <button className={style["btn-toggle"]}>
              <span>В лунных орбитах</span>
            </button>
          </div>
          <div className={style["cards-container"]}>
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid /> <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            <Asteroid />
            {asteroids.map((asteroid: any) => (
              <Asteroid asteroid={asteroid} key={asteroid.id} />
              // <div className={style.card} key={asteroid.id}>

              //   <div className={style["card-image"]}>
              //     <span>{dateFormat}</span>
              //   </div>
              // </div>
            ))}
            {/* <div className={main.card}>
                <span>12 сент 2023</span>
                <div className={main["card-image"]}>
                  <span>5 652 475 км</span>
                  <Image
                    // layout="responsive"
                    src="/meteor.svg"
                    alt="Meteor"
                    width={40}
                    height={40}
                  />
                  <span>2021FQ</span>
                </div>
                <div className={main["card-btn"]}>
                  <button className={main.btn}>
                    <span>Заказать</span>
                  </button>
                  <div className={main["image-wrapper"]}>
                    <Image
                      src="/warning.svg"
                      alt="Warning"
                      width={67}
                      height={20}
                    />
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
