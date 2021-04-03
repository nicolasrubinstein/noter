import React from "react";
import styled from "styled-components";
import useTheme from "../../context/Theme";
import ToggleTheme from "react-toggle-theme";

const ThemeToggle = () => {
  const { theme, setTheme }: any = useTheme();

  return (
    <Container>
      <Label txt={theme === "light" ? "black" : "white"}>Theme</Label>
      <ToggleTheme selectedTheme={theme} onChange={setTheme} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 15px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
  margin-right: 3vw;
  color: ${(props: any) => props.txt};
`;

export default ThemeToggle;
