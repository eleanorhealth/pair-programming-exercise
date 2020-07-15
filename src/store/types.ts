import { PayloadAction } from "@reduxjs/toolkit";

import { RequestStatus } from "helpers/request";
import { ClinicalSlice } from "./reducers/clinical/types";

export interface IRootState {
  clinical: ClinicalSlice;
}

export type StringPayload = PayloadAction<string>;
export type StringArrPayload = PayloadAction<string[]>;
export type RequestStatusPayload = PayloadAction<RequestStatus>;
