import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { selectRate, toggleRate } from "@/shared/model/questionsFilters/model";
import { Button, FilterChip } from "@/shared/ui";

import { RATE_STATS } from "./config/constants.ts";

import styles from "./Rate.module.scss";
interface RateProps {
  resetPage: () => void;
}
export const Rate = ({ resetPage }: RateProps) => {
  const stats = useAppSelector(selectRate);
  const dispatch = useAppDispatch();

  const onToggleRate = (rate: number) => {
    dispatch(toggleRate(rate));
    resetPage();
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Рейтинг</h4>
      <ul className={styles.list}>
        {RATE_STATS.map((rate) => (
          <Button key={rate} className={styles.chipButton} onClick={() => onToggleRate(rate)}>
            <FilterChip active={stats.includes(rate)}>{rate}</FilterChip>
          </Button>
        ))}
      </ul>
    </div>
  );
};
