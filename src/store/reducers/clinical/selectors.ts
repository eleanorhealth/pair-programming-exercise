import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "store/types";

export const selectClinicalSlice = (state: IRootState) => state.clinical;

export const selectGETStatus = createSelector(
  selectClinicalSlice,
  ({ status }) => status.get
);
