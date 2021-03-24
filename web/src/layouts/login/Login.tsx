import React from "react";
import GoogleLogin from "react-google-login";
import useLoggedIn from "../../context/LoggedIn";
import "./Login.scss";

const Login = () => {
  const { userInfo, setUserInfo, setIsLoggedIn }: any = useLoggedIn();

  const responseGoogle = (response: any) => {
    const { profileObj } = response;
    setUserInfo(profileObj);
    setIsLoggedIn(true);
  };

  return (
    <div className="container">
      <h1>Your notes, anywhere</h1>
      <div className="btn-container">
        <GoogleLogin
          clientId="150608648503-eba16gnv5g8s78f60s2n28ia6j7g2jkk.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          render={(renderProps) => (
            <button onClick={renderProps.onClick} className="login-button">
              <img src="assets/google.png" alt="google icon" width={20} />
              Log in with Google
            </button>
          )}
          onFailure={(response) => {
            if (response.googleId) {
              responseGoogle(response);
            }
          }}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          className="login-button"
        />
      </div>
    </div>
  );
};

export default Login;
