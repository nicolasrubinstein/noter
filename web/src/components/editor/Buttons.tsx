import React from "react";
import styled from "styled-components";

interface ButtonsProps {
  isSaveLoading: boolean;
  onDelete?: any;
  isDeleteLoading?: boolean;
  onSave: any;
  title: string;
}

const Buttons = ({
  isSaveLoading,
  onDelete,
  isDeleteLoading,
  onSave,
  title,
}: ButtonsProps) => {
  return (
    <ButtonsStyled>
      <ButtonSave
        onClick={(e: React.FormEvent) => {
          e.preventDefault();
          if (title) {
            onSave();
          }
        }}
        className="btn-submit-edit"
      >
        {isSaveLoading ? "Saving..." : "Save"}
      </ButtonSave>
      {onDelete && (
        <ButtonDelete onClick={onDelete}>
          {isDeleteLoading ? "Deleting..." : "Delete"}
        </ButtonDelete>
      )}
    </ButtonsStyled>
  );
};

const ButtonsStyled = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 20vw;
  height: 35px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 18px;

  @media (max-width: 600px) {
    width: 30vw;
  }
`;

const ButtonDelete = styled(Button)`
  background-color: indianred;
  &:hover {
    background: rgb(141, 56, 56);
    @media (max-width: 499px) {
      background-color: indianred;
    }
  }
`;

const ButtonSave = styled(Button)`
  background: orange;
  &:hover {
    background: rgb(175, 140, 73);
    @media (max-width: 499px) {
      background-color: orange;
    }
  }
`;

export default Buttons;
