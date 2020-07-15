import { ThemeGetter } from "./types";

const getColor: ThemeGetter<"colors"> = (color) => ({ theme: { colors } }) =>
  colors[color];

export default getColor;
