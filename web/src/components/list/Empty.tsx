import React from "react";
import styled from "styled-components";
import useTheme, { ThemeHook } from "../../context/Theme";
const Empty = () => {
  const { theme }: ThemeHook = useTheme();

  return (
    <Container>
      <Arrow txt={theme === "light" ? "black" : "rgb(189, 178, 178)"}>⬆</Arrow>
      <Message txt={theme === "light" ? "black" : "rgb(189, 178, 178)"}>
        Start by adding a few notes!
      </Message>
    </Container>
  );
};

const Container = styled.div`
  margin-top: -30px;
`;

const Arrow = styled.h1`
  color: ${(props: any) => props.txt};
  font-size: 70px;
  padding: 0;
  margin: 0;
`;

const Message = styled.h2`
  color: ${(props: any) => props.txt};
`;

export default Empty;
