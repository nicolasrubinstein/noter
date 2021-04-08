import React from "react";
import styled from "styled-components";
import useTheme, { ThemeHook } from "../../context/Theme";
interface Props {
  onOpen: any;
}

const OpenSidebar: React.FC<Props> = ({ onOpen }) => {
  const { theme }: ThemeHook = useTheme();

  return (
    <Open onClick={onOpen}>
      <Line color={theme === "light" ? "black" : "white"} />
      <Line color={theme === "light" ? "black" : "white"} />
      <Line color={theme === "light" ? "black" : "white"} />
    </Open>
  );
};

const Open = styled.div`
  width: 50px;
  height: 30px;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Line = styled.div`
  width: 40px;
  height: 3px;
  background: ${(props: any) => props.color};
`;

export default OpenSidebar;
