import React from "react";
import { GoogleLogout } from "react-google-login";
import styled from "styled-components";

const LogoutButton = ({ userInfo }: any) => {
  return (
    <GoogleLogout
      clientId="150608648503-eba16gnv5g8s78f60s2n28ia6j7g2jkk.apps.googleusercontent.com"
      render={(renderProps: any) => (
        <LogoutButtonStyled onClick={renderProps.onClick}>
          <img src={userInfo.imageUrl} alt="google icon" width={35} />
          <p>Log out</p>
        </LogoutButtonStyled>
      )}
      onLogoutSuccess={() => window.location.reload()}
    />
  );
};

const LogoutButtonStyled = styled.button`
  margin-top: 15px;
  width: 20vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: none;
  cursor: pointer;
  padding: 0 2vw;
  border-radius: 3px;
  margin-right: 5vw;
  img {
    border-radius: 50%;
  }
  p {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    width: 40vw;
  }
`;

export default LogoutButton;
