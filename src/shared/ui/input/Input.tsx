import type { ChangeEvent, ComponentProps } from "react";

import clsx from "clsx";

import { SearchIcon } from "@/shared/assets";

import styles from "./Input.module.scss";

interface InputProps extends ComponentProps<"input"> {
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  isError?: boolean;
  value: string;
}

export const Input = ({
  errorMessage,
  isError,
  value,
  changeValue,
  name,
  className,
  ...rest
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <input
        name={name}
        className={clsx(styles.input, className)}
        placeholder={"Введите запрос..."}
        value={value}
        onChange={changeValue}
        {...rest}
      />
      {isError && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};
