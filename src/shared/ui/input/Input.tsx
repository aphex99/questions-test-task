import type { ChangeEvent, ComponentProps } from "react";

import { SearchIcon } from "@/shared/assets";

import styles from "./Input.module.scss";

interface InputProps extends ComponentProps<"input"> {
  value: string;
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, changeValue, name, ...rest }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <input
        name={name}
        className={styles.input}
        placeholder={"Введите запрос..."}
        value={value}
        onChange={changeValue}
        {...rest}
      />
    </div>
  );
};
