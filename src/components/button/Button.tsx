import { ButtonProps } from "./types";
import styles from "./Button.module.scss";
import { useState } from "react";
import lightenColor from "@utils/lightenColor";

const Button = ({ bgColor, fontColor, fn, onClick }: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const buttonStyles: React.CSSProperties = {
    backgroundColor: isHover ? lightenColor(bgColor, 50) : bgColor,
    color: fontColor,
  };

  return (
    <div
      style={buttonStyles}
      className={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {fn}
    </div>
  );
};

export default Button;
