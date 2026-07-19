import { type ChangeEvent, useEffect, useState } from "react";

import clsx from "clsx";

import { useDebounce } from "@/shared/lib/hooks";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { setTitle } from "@/shared/model/questionsFilters/model";
import { selectTitle } from "@/shared/model/questionsFilters/model";
import { Input } from "@/shared/ui";

import styles from "./SearchQuestion.module.scss";

interface SearchQuestionProps {
  resetPage: () => void;
}

export const SearchQuestion = ({ resetPage }: SearchQuestionProps) => {
  const title = useAppSelector(selectTitle);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(title);
  const [showError, setShowError] = useState(false);

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    setValue(title);
  }, [title]);

  useEffect(() => {
    dispatch(setTitle(debouncedValue));
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    if (!showError) {
      return;
    }
    const id = setTimeout(() => {
      setShowError(false);
    }, 3000);

    return () => clearTimeout(id);
  }, [showError]);

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    resetPage();
  };

  const onBlur = () => {
    if (value.trim() === "") {
      setShowError(true);
    }
  };

  return (
    <Input
      className={clsx({ [styles.inputError]: showError })}
      changeValue={onChangeTitle}
      name={"search"}
      onBlur={onBlur}
      value={value}
      isError={showError}
      errorMessage={"введите текст для поиска"}
    />
  );
};
