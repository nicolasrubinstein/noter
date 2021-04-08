import React from "react";
import styled from "styled-components";
import useLoggedIn, { LoggedInHook } from "../../context/LoggedIn";
import useTheme, { ThemeHook } from "../../context/Theme";
import OpenSidebar from "./OpenSidebar";

interface Props {
  openSidebar: any;
}

const Header: React.FC<Props> = ({ openSidebar }) => {
  const { theme }: ThemeHook = useTheme();
  const { userInfo }: LoggedInHook = useLoggedIn();

  return (
    <HeaderStyled
      id="top"
      bg={
        theme === "light"
          ? "rgba(255, 255, 255, 0.671)"
          : "rgba(2, 2, 2, 0.671)"
      }
    >
      <OpenSidebar onOpen={openSidebar} />
      <Heading txt={theme === "light" ? "black" : "white"}>
        {userInfo?.givenName}'s notes
      </Heading>
      <div></div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  padding-top: 15px;
  width: 100vw;
  height: 80px;
  background-color: ${(props: any) => props.bg};
  margin-top: -22px;
  padding: 0 5vw;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`
  margin-top: 35px;
  color: ${(props: any) => props.txt};
`;

export default Header;
