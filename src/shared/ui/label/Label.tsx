import styles from "./Label.module.scss";

export interface LabelProps {
  title: string;
  value: number;
}

export const Label = ({ title, value }: LabelProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{`${title}:`}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};
