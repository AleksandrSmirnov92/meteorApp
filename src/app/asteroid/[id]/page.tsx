import style from "./asteroid.module.css";
import Image from "next/image";
export default function Asteroid() {
  return (
    <div className={style.asteroid__wrapper}>
      <div className={style.asteroid__container}>
        <div className={style.image__wrapper}>
          <span>Название Астероида</span>
          <Image src="/meteor.svg" alt="Meteor" width={200} height={400} />
          <span>Описание Астероида</span>
        </div>
        Здесь будет информация о астероиде
      </div>
    </div>
  );
}
