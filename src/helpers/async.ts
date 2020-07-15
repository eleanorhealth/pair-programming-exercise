/* eslint-disable import/prefer-default-export */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
