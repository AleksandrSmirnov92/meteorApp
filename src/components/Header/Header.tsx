import header from "./header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <div className={header.header__wrapper}>
      <div className={header.header__container}>
        <Link href={"/"}>
          <h1 className={header.header__title}>Armagedon 2023</h1>
        </Link>
        <span className={header.header_description}>
          ООО “Команда им. Б. Уиллиса”.
          <br /> Взрываем астероиды с 1998 года.
        </span>
      </div>
    </div>
  );
};
export default Header;
