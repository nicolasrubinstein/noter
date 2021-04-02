import React from "react";
import styled from "styled-components";
import useTheme from "../../context/Theme";
import ToggleTheme from "react-toggle-theme";

const ThemeToggle = () => {
  const { theme, setTheme }: any = useTheme();

  return (
    <Toggle txt={theme === "light" ? "black" : "white"}>
      <ToggleTheme selectedTheme={theme} onChange={setTheme} />
    </Toggle>
  );
};

const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props: any) => props.txt};
  width: 120px;
  margin-top: 15px;
`;

export default ThemeToggle;
