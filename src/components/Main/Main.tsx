import style from "./main.module.css";
import { Content } from "../Content/Content";
import Header from "../Header/Header";
import { ResponceData } from "../../types/index";
import { currentDate } from "@/utils";
const getData = async (currentDate: () => string) => {
  try {
    const data = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate()}&api_key=0kWkJf3IFmFhfq4wMUx2freKtjgajCDSgarc9zIo`
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
      .sort((a: { approach_date: string }, b: { approach_date: string }) => {
        const A = Number(new Date(b.approach_date));
        const B = Number(new Date(a.approach_date));
        return A - B;
      })
      .reverse();
  } catch (error) {
    throw error;
  }
};
const Main = async () => {
  let data = await getData(currentDate);

  return (
    <div className={style.main__container}>
      <Header />
      <Content data={data} />
    </div>
  );
};
export default Main;
