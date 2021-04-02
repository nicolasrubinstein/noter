import React, { useState, useEffect } from "react";
import { LoggedIn } from "./context/LoggedIn";
import UserInfo from "./interfaces/UserInfo";
import "./index.scss";
import Login from "./layouts/login/Login";
import Main from "./layouts/main/Main";
import { ThemeContext } from "./context/Theme";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>();
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const newTheme = localStorage.getItem("theme") || "light";
    setTheme(newTheme);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#d3d3d3" : "#3d3d3d";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="body">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoggedIn.Provider
          value={{
            isLoggedIn,
            setIsLoggedIn,
            userInfo,
            setUserInfo,
          }}
        >
          {!isLoggedIn && <Login />}
          {isLoggedIn && <Main />}
        </LoggedIn.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
