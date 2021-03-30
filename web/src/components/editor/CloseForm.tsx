import React from "react";
import styled from "styled-components";

interface CloseFormProps {
  onClose: any;
  needsPrompt: boolean;
}

const CloseForm = ({ onClose, needsPrompt }: CloseFormProps) => {
  const handleClose = () => {
    if (!needsPrompt) {
      onClose();
    } else if (window.confirm("Discard changes?")) {
      onClose();
    }
  };

  return (
    <CloseFormStyled>
      <img
        src="assets/close.png"
        alt="close"
        width="50"
        onClick={handleClose}
      />
    </CloseFormStyled>
  );
};

const CloseFormStyled = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: row-reverse;

  img {
    margin: 3px;
    padding: 10px;
    border-radius: 50%;
    &:hover {
      background: rgb(218, 216, 216);
      cursor: pointer;
    }

    @media (max-width: 499px) {
      width: 60px;
    }
  }
`;

export default CloseForm;
