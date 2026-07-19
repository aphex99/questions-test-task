import { COMPLEXITY_LEVELS } from "@/features/filters/complexity/config/constants.ts";

import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { selectComplexity, toggleComplexity } from "@/shared/model/questionsFilters/model";
import { Button, FilterChip } from "@/shared/ui";

import styles from "./Complexity.module.scss";
interface ComplexityProps {
  resetPage: () => void;
}
export const Complexity = ({ resetPage }: ComplexityProps) => {
  const levels = useAppSelector(selectComplexity);
  const dispatch = useAppDispatch();

  const onToggleComplexity = (complexity: number[]) => {
    dispatch(toggleComplexity(complexity));
    resetPage();
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Уровень сложности</h4>
      <ul className={styles.list}>
        {COMPLEXITY_LEVELS.map((level) => (
          <Button
            key={level.id}
            className={styles.chipButton}
            onClick={() => onToggleComplexity(level.values)}
          >
            <FilterChip className={styles.filterChip} active={levels.includes(level.values[0])}>
              {level.label}
            </FilterChip>
          </Button>
        ))}
      </ul>
    </div>
  );
};
