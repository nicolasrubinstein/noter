import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap, { TweenLite } from "gsap";
import useTheme, { ThemeHook } from "../../context/Theme";
import CloseBar from "./CloseBar";
import useOutsideClick from "../../useOutsideClick";
import ThemeToggle from "./ThemeToggle";
import useLoggedIn, { LoggedInHook } from "../../context/LoggedIn";
import LogoutButton from "./LogoutButton";

gsap.registerPlugin(TweenLite);

interface Props {
  onClose: any;
}

const Sidebar: React.FC<Props> = ({ onClose }) => {
  const { theme }: ThemeHook = useTheme();
  const { userInfo }: LoggedInHook = useLoggedIn();

  const bar = useRef(null);

  useOutsideClick(bar, onClose);

  useEffect(() => {
    TweenLite.from(document.querySelector("#bar"), 0.3, {
      x: 100,
      autoAlpha: 0,
    });
  }, []);

  return (
    <Super>
      <SidebarStyled
        ref={bar}
        id="bar"
        bg={
          theme === "light" ? "rgb(255, 255, 255, .9)" : "rgba(70, 68, 68, 0.9)"
        }
      >
        <CloseBar close={onClose} />
        <SidebarItems>
          <article>
            <LogoutButton userInfo={userInfo} />
          </article>
          <article>
            <ThemeToggle />
          </article>
        </SidebarItems>
      </SidebarStyled>
    </Super>
  );
};

const Super = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  z-index: 0;
  z-index: 1000;
`;

const SidebarStyled = styled.nav`
  visibility: hidden;
  height: 100vh;
  width: 60vw;
  max-width: 300px;
  background: ${(props: any) => props.bg};
  position: inherit;
  @media (max-width: 499px) {
    width: 80vw;
  }
`;

const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  article {
    margin-bottom: 50px;
  }
`;

export default Sidebar;
