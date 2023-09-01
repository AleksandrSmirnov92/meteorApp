import style from "./main.module.css";
import { Content } from "../Content/Content";
import Header from "../Header/Header";
import { ResponceData } from "../../types/index";

const getData = async () => {
  let date = new Date();
  let dateFormat: string = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  try {
    const data = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateFormat}&api_key=0kWkJf3IFmFhfq4wMUx2freKtjgajCDSgarc9zIo`
    );
    const responceData = await data.json();
    let asteroids = [];
    for (let item in responceData.near_earth_objects) {
      asteroids.push(...responceData.near_earth_objects[item]);
    }
    return asteroids
      .map((item: ResponceData) => {
        return {
          id: item.id,
          name: item.name,
          approach_date: item.close_approach_data[0].close_approach_date,
          diameter: item.estimated_diameter.meters.estimated_diameter_max,
          distance: {
            killometers: item.close_approach_data[0].miss_distance.kilometers,
            lunar: item.close_approach_data[0].miss_distance.lunar,
          },
          active: false,
        };
      })
      .reverse();
  } catch (error) {
    throw error;
  }
};
const Main = async () => {
  let data = await getData();

  return (
    <div className={style.main__container}>
      <Header />
      <Content data={data} />
    </div>
  );
};
export default Main;
