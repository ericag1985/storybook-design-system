import React from "react";
import styles from "./button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variant choices for the button
   */
  variant?: "filled" | "outlined" | "text" | "elevated" | "tonal";
  /**
   * Optional click handler
   */
  handleClick?: () => void;
}

/**
 * Button component for user interaction
 */
export const Button = ({
  variant = "filled",
  handleClick,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${styles.base} ${styles[variant]}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};
