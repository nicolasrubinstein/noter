import React from "react";
import styled from "styled-components";

interface TitleInputProps {
  title: string;
  setTitle: any;
}

const TitleInput = ({ title, setTitle }: TitleInputProps) => {
  return (
    <div style={{ textAlign: "center", marginTop: "-30px" }}>
      <TitleInputStyled
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        maxLength={40}
      />
    </div>
  );
};

const TitleInputStyled = styled.input`
  width: 30vw;
  height: 40px;
  border: 1px solid black;
  text-align: center;
  font-size: 18px;
  @media (max-width: 600px) {
    width: 50vw;
  }

  @media (max-width: 499px) {
    margin-top: 25px;
    width: 80vw;
  }
`;

export default TitleInput;
