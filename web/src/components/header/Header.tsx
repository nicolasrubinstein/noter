import React from "react";
import useLoggedIn from "../../context/LoggedIn";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const { userInfo }: any = useLoggedIn();
  return (
    <HeaderStyled id="top">
      <h1>{userInfo.givenName}'s notes</h1>
      <LogoutButton userInfo={userInfo} />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  padding-top: 15px;
  width: 100vw;
  height: 80px;
  background: rgba(255, 255, 255, 0.671);
  margin-top: -22px;
  display: flex;
  justify-content: space-between;
  padding: 0 4vw;
  align-items: center;

  h1 {
    margin-top: 30px;
    font-size: 24px;
  }
`;

export default Header;
