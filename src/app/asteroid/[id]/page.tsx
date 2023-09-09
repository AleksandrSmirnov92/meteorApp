import style from "./asteroid.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
interface Params {
  params: {
    id: string;
  };
}
type GetAsteroid = (asteroid: string) => Promise<{
  name: string;
  orbital_data: string;
  designation: string;
  absolute_magnitude_h: string;
  kilometers: number;
  meters: number;
  is_potentially_hazardous_asteroid: false;
  close_approach_data: string[];
}>;

let getAsteroid: GetAsteroid = async (asteroidId) => {
  try {
    let data = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=1IUa1dqtYEvrIxBzbdpZg2penZxgWm3ERmYcsV8s`
    );
    if (data.headers.get("content-type") !== "application/json") {
      throw Error;
    }
    let responce = await data.json();
    return {
      name: responce.name,
      name_limited: responce.name_limited,
      orbital_data: responce.orbital_data.first_observation_date,
      designation: responce.designation,
      absolute_magnitude_h: responce.absolute_magnitude_h,
      kilometers: responce.estimated_diameter.kilometers.estimated_diameter_max,
      meters: responce.estimated_diameter.meters.estimated_diameter_max,
      is_potentially_hazardous_asteroid:
        responce.is_potentially_hazardous_asteroid,
      close_approach_data: responce.close_approach_data.map(
        (item: any) => item.close_approach_date
      ),
    };
  } catch (error) {
    throw error;
  }
};
export default async function Asteroid({ params }: Params) {
  let {
    name,
    orbital_data,
    designation,
    absolute_magnitude_h,
    kilometers,
    meters,
    is_potentially_hazardous_asteroid,
    close_approach_data,
  } = await getAsteroid(params.id);

  return (
    <div className={style.asteroid__wrapper}>
      <div className={style.asteroid__container}>
        <div className={style.asteroid__content}>
          <div className={style["asteroid__content-name"]}>
            <ul className={style["content-name__list"]}>
              <h2 className={style["list-title"]}>Описание Астероида</h2>
              <li>
                <span>Индитификатор - {params.id}</span>
              </li>
              <li>
                <span>Полное название - {name}</span>
              </li>
              <li>
                <span>Первый раз обнаружен - {orbital_data}</span>
              </li>
              <li>
                <span>Обозначение - {designation}</span>
              </li>
            </ul>
          </div>
          <div className={style["content-image__wrapper"]}>
            <Image src="/meteor.svg" alt="Meteor" width={200} height={400} />
          </div>

          <div className={style["asteroid__content-characteristics"]}>
            <ul className={style["content-characteristics__list"]}>
              <h2 className={style["list-title"]}>Основные Характеристики</h2>
              <li>
                <span>Абсолютная величина- {absolute_magnitude_h}</span>
              </li>
              <li>
                Предпологаемый диаметр:
                <ul>
                  <li>
                    <span>В километрах - {kilometers}</span>
                  </li>
                  <li>
                    <span>В метрах - {meters}</span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  Потенциально_опасный_астероид -{" "}
                  {is_potentially_hazardous_asteroid ? "Да" : "Нет"}
                </span>
              </li>
              <li>
                <>
                  <span>Все сближения с землей - </span>
                  {close_approach_data.join(", ")}
                </>
              </li>
            </ul>
          </div>
        </div>
        <div className={style["link-back__container"]}>
          <Link href={"/"} className={style["link-back"]}>
            <FaArrowLeft className={style["link-back__image"]} />
            <span>Назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
