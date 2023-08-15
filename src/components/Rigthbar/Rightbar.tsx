import style from "./rightbar.module.css";
export const Rightbar: React.FC = () => {
  return (
    <div className={style.rightbar__wrapper}>
      <div className={style.rightbar__container}>
        <div className={style.rightbar__basket}>
          <div className={style["rightbar__basket-text"]}>
            <span>Корзина</span>
            <span>2 остероида</span>
          </div>
          <button className={style["rightbar__basket-btn"]}>
            <span>Отправить</span>
          </button>
        </div>
      </div>
    </div>
  );
};
