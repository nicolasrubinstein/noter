import { createContext, useContext } from "react";
import UserInfo from "../interfaces/UserInfo";

export interface LoggedInHook {
  isLoggedIn?: boolean;
  setIsLoggedIn?: any;
  userInfo?: UserInfo;
  setUserInfo?: any;
}
export const LoggedIn = createContext<LoggedInHook>({
  isLoggedIn: false,
  setIsLoggedIn() {},
  userInfo: {
    googleId: "",
    email: "",
    givenName: "",
    familyName: "",
    imageUrl: "",
    name: "",
  },
  setUserInfo() {},
});

const useLoggedIn = () => useContext(LoggedIn);

export default useLoggedIn;
