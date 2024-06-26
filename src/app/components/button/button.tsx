import React from "react";
import styles from "./button.module.scss";
import { ButtonVariants } from "./types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variant choices for the button
   */
  variant?: ButtonVariants;
  /**
   * Optional click handler
   */
  handleClick?: () => void;
}

/**
 * Button component for user interaction
 */
export const Button = ({
  variant = ButtonVariants.Filled,
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
