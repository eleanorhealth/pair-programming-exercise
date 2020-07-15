import { createAsyncThunk } from "@reduxjs/toolkit";

import { getMembers as apiGetMembers } from "api/members";

const getMembers = createAsyncThunk("names:GET", apiGetMembers);

export default getMembers;
