import React, { useEffect } from "react";
import styled from "styled-components";
import { TweenLite } from "gsap";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  useEffect(() => {
    TweenLite.from(document.querySelector("#bar"), 0.3, {
      x: 100,
      autoAlpha: 0,
    });
  }, []);

  return TweenLite ? (
    <Super>
      <SidebarStyled id="bar"></SidebarStyled>
    </Super>
  ) : (
    <div></div>
  );
};

const Super = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  z-index: 0;
`;

const SidebarStyled = styled.nav`
  visibility: hidden;
  height: 100vh;
  width: 25%;
  background: green;
  position: inherit;

  button {
    margin-top: 100px;
  }
`;

export default Sidebar;
