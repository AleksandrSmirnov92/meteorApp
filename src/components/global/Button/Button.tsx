import style from "./Button.module.css";
import { MouseEventHandler } from "react";
interface ButtonProps {
  text: string;
  color?: string;
  size?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  color,
  size,
  handleClick,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        className={`${style[`btn-${size}`]} ${style[`btn-color_${color}`]}`}
      >
        <span className={`${style["btn-text"]} ${style[`btn-${color}`]}`}>
          {text}
        </span>
      </button>
    </>
  );
};
