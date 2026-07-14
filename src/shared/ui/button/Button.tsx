import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  const buttonStyles = className ? clsx(className, styles.button) : styles.button;
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
