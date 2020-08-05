import { RequestStatus } from "helpers/request";

export type ClinicalSlice = {
  status: {
    get: RequestStatus;
  };
  members: IMember[];
};

// TODO - This interface is incomplete
export interface IMember {
  name: {
    first: string;
    last: string;
  };
  phone: string;
  unreadMessageCount: number;
}
