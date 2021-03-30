import React, { useState } from "react";
import { LoggedIn } from "./context/LoggedIn";
import UserInfo from "./interfaces/UserInfo";
import "./index.scss";
import Login from "./layouts/login/Login";
import Main from "./layouts/main/Main";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>();
  return (
    <div>
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
    </div>
  );
};

export default App;
