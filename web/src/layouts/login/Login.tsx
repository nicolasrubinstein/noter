import React from "react";
import GoogleLogin from "react-google-login";
import useLoggedIn from "../../context/LoggedIn";
import styled from "styled-components";

const Login = () => {
  const { setUserInfo, setIsLoggedIn }: any = useLoggedIn();

  const responseGoogle = (response: any) => {
    const { profileObj } = response;
    setUserInfo(profileObj);
    setIsLoggedIn(true);
  };

  return (
    <Container>
      <h1>Your notes, anywhere</h1>
      <ButtonContainer>
        <GoogleLogin
          clientId="150608648503-eba16gnv5g8s78f60s2n28ia6j7g2jkk.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          render={(renderProps) => (
            <LoginButton onClick={renderProps.onClick}>
              <img src="assets/google.png" alt="google icon" width={20} />
              Log in with Google
            </LoginButton>
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
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  height: 500px;
  margin-top: 50px;
`;

const LoginButton = styled.button`
  outline: none;
  margin-top: 50px;
  background: white;
  border: none;
  width: 20vw;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  @media (max-width: 874px) {
    width: 50vw;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Login;