"use client";
import style from "./main.module.css";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { Asteroid } from "../Main/Asteroid/Asteroid";
import { Leftbar } from "../LeftBar/LeftBar";
import { Rightbar } from "../Rigthbar/Rightbar";
import { Content } from "../Main/Content/Content";

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
    <div className={style.main__container}>
      <Leftbar />
      <Content />
      <Rightbar />
    </div>
  );
};
