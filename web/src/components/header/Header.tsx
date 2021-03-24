import React from "react";
import "./Header.scss";
import useLoggedIn from "../../context/LoggedIn";
import { GoogleLogout } from "react-google-login";

const Header = () => {
  const { userInfo }: any = useLoggedIn();
  return (
    <header>
      <h1>{userInfo.givenName}'s notes</h1>
      <div className="logout">
        <GoogleLogout
          clientId="150608648503-eba16gnv5g8s78f60s2n28ia6j7g2jkk.apps.googleusercontent.com"
          render={(renderProps) => (
            <button onClick={renderProps.onClick} className="logout-button">
              <img src={userInfo.imageUrl} alt="google icon" width={35} />
              <p>Log out</p>
            </button>
          )}
          onLogoutSuccess={() => window.location.reload()}
        />
      </div>
    </header>
  );
};

export default Header;
