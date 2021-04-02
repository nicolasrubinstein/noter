import { createContext, useContext } from "react";

export const ThemeContext: any = createContext(null);

const useTheme = () => useContext(ThemeContext);

export default useTheme;
