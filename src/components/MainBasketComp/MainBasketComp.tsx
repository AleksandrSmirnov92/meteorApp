import style from "./MainBasketComp.module.css";
import Header from "../Header/Header";
import BasketContent from "../BasketContent/BasketContent";

const MainBasketComp = () => {
  return (
    <div className={style["main-basket-container"]}>
      <Header />
      <BasketContent />
    </div>
  );
};
export default MainBasketComp;
