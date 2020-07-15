import { ThemeGetter } from "./types";

const getSpacing: ThemeGetter<"spacing"> = (size) => ({ theme: { spacing } }) =>
  spacing[size];

export default getSpacing;
