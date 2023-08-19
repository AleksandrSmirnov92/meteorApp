import style from "./leftbar.module.css";
import Image from "next/image";
export const Leftbar: React.FC = () => {
  return (
    <div className={style.leftbar__container}>
      <div className={style["leftbar__image-container"]}>
        <Image
          src="/Earth.svg"
          alt="Earth"
          width={377}
          height={600}
          layout="responsive"
        />
      </div>
    </div>
  );
};
