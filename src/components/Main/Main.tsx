import main from "./main.module.css";
import Image from "next/image";
export const Main: React.FC = () => {
  return (
    <div className={main.main__wrapper}>
      <div className={main.main__container}>
        <div className={main.main__description}>
          <h2>Ближайшие подлёты астероидов</h2>
          <div className={main["main__description-toggle"]}>
            <span>В километрах</span>
            {" | "}
            <span> В лунных орбитах</span>
          </div>
          <div className={main["cards-container"]}>
            <div className={main.card}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
