import React from "react";
import useLoggedIn from "../../context/LoggedIn";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import useTheme from "../../context/Theme";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { userInfo }: any = useLoggedIn();

  const { theme }: any = useTheme();

  return (
    <HeaderStyled
      id="top"
      bg={
        theme === "light"
          ? "rgba(255, 255, 255, 0.671)"
          : "rgba(2, 2, 2, 0.671)"
      }
    >
      <section>
        <ThemeToggle />
      </section>
      <section>
        <LogoutButton userInfo={userInfo} />
      </section>
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
  justify-content: space-between;
  align-items: center;
`;

export default Header;
