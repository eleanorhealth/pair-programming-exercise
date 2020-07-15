import { ThemeGetter } from "./types";

const getFont: ThemeGetter<"font"> = (fontKey) => ({ theme: { font } }) =>
  font[fontKey];

export default getFont;
