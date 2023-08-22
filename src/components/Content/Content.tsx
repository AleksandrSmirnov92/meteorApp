import style from "./Content.module.css";
import { Rightbar } from "../Rigthbar/Rightbar";
import { Card } from "../Card/Card";
interface Asteroid {
  name: string;
  meters: {
    estimated_diameter_max: number;
  };
}
interface Props {
  asteroids: Asteroid[];
}
export const Content: React.FC<Props> = ({ asteroids }) => {
  return (
    <div className={style["content-container"]}>
      <div className={style.content}>
        <h2>
          Ближайшие подлёты <br /> астероидов
        </h2>
        <pre className={style.toggleBar}>
          <button className={style["toggleBar-btn"]}>
            <span>В километрах</span>
          </button>
          <span>{" | "}</span>
          <button className={style["toggleBar-btn"]}>
            <span>В лунных арбитах</span>
          </button>
        </pre>
        <div className={style["card-container"]}>
          <>
            {asteroids.map((asteroid: Asteroid, index) => (
              <Card
                name={asteroid.name}
                diameter={asteroid.meters.estimated_diameter_max}
                key={index}
              />
            ))}
          </>
          <Rightbar />
        </div>
      </div>
    </div>
  );
};
