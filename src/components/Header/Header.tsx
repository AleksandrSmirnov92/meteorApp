import header from "./header.module.css";
export const Header: React.FC = () => {
  return (
    <div className={header.header__wrapper}>
      <div className={header.header__container}>
        <h1 className={header.header__title}>Armagedon 2023</h1>
        <span className={header.header_description}>
          ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.
        </span>
      </div>
    </div>
  );
};
