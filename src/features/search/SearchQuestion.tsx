import { type ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDebounce } from "@/shared/lib/hooks";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { setTitle } from "@/shared/model/questionsFilters/model";
import { selectTitle } from "@/shared/model/questionsFilters/model";
import { Input } from "@/shared/ui";

import styles from "./SearchQuestion.module.scss";

export const SearchQuestion = () => {
  const title = useAppSelector(selectTitle);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const [value, setValue] = useState(title);

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    navigate(`?page=1`);
    dispatch(setTitle(debouncedValue));
  }, [debouncedValue, dispatch]);

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <Input value={value} changeValue={onChangeTitle} name={"search"} />
    </div>
  );
};
