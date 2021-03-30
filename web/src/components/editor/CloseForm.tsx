import React from "react";
import styled from "styled-components";

interface CloseFormProps {
  onClose: any;
}

const CloseForm = ({ onClose }: CloseFormProps) => {
  return (
    <CloseFormStyled>
      <img src="assets/close.png" alt="close" width="50" onClick={onClose} />
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
