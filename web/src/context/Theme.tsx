import { createContext, useContext } from "react";

export interface ThemeHook {
  theme: string;
  setTheme: any;
}
export const ThemeContext = createContext<ThemeHook>({
  theme: "",
  setTheme() {},
});

const useTheme = () => useContext(ThemeContext);

export default useTheme;
