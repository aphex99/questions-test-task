import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { toggleGroup } from "@/shared/lib/array";

import { questionsFiltersInitialState } from "./constants.ts";

const questionsFiltersSlice = createSlice({
  name: "questionsFilters",
  initialState: questionsFiltersInitialState,
  reducers: {
    setSpecialization(state, action: PayloadAction<number | undefined>) {
      state.specializationId =
        action.payload === state.specializationId ? undefined : action.payload;
      state.page = 1;
    },
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
      state.page = 1;
    },
    toggleComplexity(state, action: PayloadAction<number[]>) {
      state.complexity = toggleGroup(state.complexity, action.payload);
      state.page = 1;
    },
    toggleRate(state, action: PayloadAction<number>) {
      const value = action.payload;
      if (state.rate.includes(value)) {
        state.rate = state.rate.filter((rate) => rate !== value);
      } else {
        state.rate.push(value);
      }
      state.page = 1;
    },
    toggleSkill(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.skills.includes(id)) {
        state.skills = state.skills.filter((skill) => skill !== id);
      } else {
        state.skills.push(id);
      }
      state.page = 1;
    },
  },
});

export const { setSpecialization, setTitle, toggleComplexity, toggleRate, toggleSkill } =
  questionsFiltersSlice.actions;

export default questionsFiltersSlice.reducer;
