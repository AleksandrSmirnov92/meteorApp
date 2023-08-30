import style from "./asteroid.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
interface Params {
  params: {
    id: string;
  };
}
let getAsteroid = async (asteroidId: string) => {
  // fetch asteroidId
  return {};
};
export default async function Asteroid({ params }: Params) {
  let asteroid = await getAsteroid(params.id);

  return (
    <div className={style.asteroid__wrapper}>
      <div className={style.asteroid__container}>
        <div className={style.asteroid__content}>
          <div className={style["asteroid__content-name"]}>
            <ul className={style["content-name__list"]}>
              <h2 className={style["list-title"]}>Описание Астероида</h2>
              <li>
                <span>Имя-name_limited</span>
              </li>
              <li>
                <span>Полное название-name</span>
              </li>
              <li>
                <span>
                  Первый раз обнаружен-orbital_data.first_observation_date
                </span>
              </li>
              <li>
                <span>Обозначение-designation</span>
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
                <span>Абсолютная величина- absolute_magnitude_h</span>
              </li>
              <li>
                Предпологаемый диаметр:
                <ul>
                  <li>
                    <span>В километрах-estimated_diameter.kilometers</span>
                  </li>
                  <li>
                    <span>В метрах-estimated_diameter.meters</span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  Потенциально_опасный_астероид-is_potentially_hazardous_asteroid
                </span>
              </li>
              <li>
                <span>Ближайшие сближения с землей - close_approach_data</span>
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
