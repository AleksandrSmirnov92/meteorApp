import style from "./Button.module.css";
interface Props {
  text: string;
  color: string;
  size: string;
}

export const Button: React.FC<Props> = ({ text, color, size }) => {
  return (
    <>
      <button
        className={`${style[`btn-${size}`]} ${style[`btn-color_${color}`]}`}
      >
        <span className={`${style["btn-text"]} ${style[`btn-${color}`]}`}>
          {text}
        </span>
      </button>
    </>
  );
};
