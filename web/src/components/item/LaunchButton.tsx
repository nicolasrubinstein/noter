import React from "react";
import styled from "styled-components";

interface LaunchButtonProps {
  launch: any;
}

const LaunchButton = ({ launch }: LaunchButtonProps) => {
  return (
    <LaunchButtonStyled onClick={launch}>
      <img src="assets/eye.svg" alt="open" width="30" height="30" />
    </LaunchButtonStyled>
  );
};

const LaunchButtonStyled = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  margin-right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgb(225, 225, 225);
    cursor: pointer;
    @media (max-width: 499px) {
      background: transparent;
    }
  }
`;

export default LaunchButton;
