/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RequestStatus } from "helpers/request";
import getMembers from "./thunks/getMembers";
import { ClinicalSlice, IMember } from "./types";

const initialState: ClinicalSlice = {
  status: {
    get: RequestStatus.notStarted,
  },
  members: [],
};

const clinical = createSlice({
  name: "clinical",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMembers.pending, (state) => {
      state.status.get = RequestStatus.pending;
    });
    builder.addCase(getMembers.rejected, (state) => {
      state.status.get = RequestStatus.rejected;
    });
    builder.addCase(
      getMembers.fulfilled,
      (state, { payload }: PayloadAction<IMember[]>) => {
        state.members = payload;
        state.status.get = RequestStatus.fulfilled;
      }
    );
  },
});

export default clinical;
