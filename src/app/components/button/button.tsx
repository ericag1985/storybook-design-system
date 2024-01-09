import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Design choices for the button
   */
  design?: "outlined" | "filled";
  /**
   * Variant choices for the button
   */
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * Optional click handler
   */
  handleClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  design = "filled",
  variant = "primary",
  handleClick,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`base ${design} ${variant}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};
