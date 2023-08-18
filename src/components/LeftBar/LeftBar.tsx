import leftbar from "./leftbar.module.css";
import Image from "next/image";
export const Leftbar: React.FC = () => {
  return (
    <div className={leftbar.leftbar__wrapper}>
      <div className={leftbar.leftbar__container}>
        <div className={leftbar["leftbar__image-wrapper"]}>
          <Image
            src="/Earth.svg"
            alt="Earth"
            width={377}
            height={436}
            layout="responsive"
            // fill={true}
            className={leftbar.leftbar__image}
          />
        </div>
      </div>
    </div>
  );
};
