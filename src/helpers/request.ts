import { either, equals } from "ramda";

export enum RequestStatus {
  notStarted = "notStarted",
  pending = "pending",
  fulfilled = "fulfilled",
  rejected = "rejected",
}

export const isRequestNotStarted = equals(RequestStatus.notStarted);
export const isRequestPending = equals(RequestStatus.pending);
export const isRequestFulfilled = equals(RequestStatus.fulfilled);
export const isRequestRejected = equals(RequestStatus.rejected);
export const isRequestUnfinished = either(
  isRequestPending,
  isRequestNotStarted
);
