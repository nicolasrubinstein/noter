import React from "react";
import styled from "styled-components";
import useTheme from "../../context/Theme";
import ToggleTheme from "react-toggle-theme";

const ThemeToggle = () => {
  const { theme, setTheme }: any = useTheme();

  return (
    <Container>
      <ToggleTheme selectedTheme={theme} onChange={setTheme} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 15px;
`;

export default ThemeToggle;
