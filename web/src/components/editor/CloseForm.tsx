import React from "react";
import styled from "styled-components";
import useTheme, { ThemeHook } from "../../context/Theme";

interface CloseFormProps {
  onClose: any;
  needsPrompt: boolean;
}

const CloseForm = ({ onClose, needsPrompt }: CloseFormProps) => {
  const { theme }: ThemeHook = useTheme();

  const handleClose = () => {
    if (!needsPrompt) {
      onClose();
    } else if (window.confirm("Discard changes?")) {
      onClose();
    }
  };

  return (
    <CloseFormStyled bg={theme === "light" ? "transparent" : "rgb(87, 87, 87)"}>
      {/* <img
        src="assets/close.png"
        alt="close"
        width="50"
        onClick={handleClose}
      /> */}
      <Cross onClick={handleClose}>❌</Cross>
    </CloseFormStyled>
  );
};

const CloseFormStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  height: 70px;
  &:focus {
    transform: none;
  }

  img {
    margin: 3px;
    padding: 10px;
    border-radius: 50%;
    background: ${(props: any) => props.bg};

    &:hover {
      ${(props: any) =>
        props.bg === "transparent" && "background:rgb(218, 216, 216);"}
      cursor: pointer;
    }

    @media (max-width: 499px) {
      width: 60px;
    }
  }
`;

const Cross = styled.button`
  background: transparent;
  border: none;
  height: 30px;
  font-size: 30px;
  cursor: pointer;
`;

export default CloseForm;
