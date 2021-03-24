import { createContext, useContext } from "react";

export const LoggedIn: any = createContext(null);

const useLoggedIn = () => useContext(LoggedIn);

export default useLoggedIn;
