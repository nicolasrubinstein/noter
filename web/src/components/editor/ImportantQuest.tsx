import React from "react";
import styled from "styled-components";
import "./react-toggle.scss";
import Toggle from "./Toggle";

const ImportantQuest = ({ important, setImportant }: any) => {
  return (
    <ImportantQuestStyled>
      <label>Important</label>
      <div>
        <Toggle important={important} setImportant={setImportant}/>
      </div>
    </ImportantQuestStyled>
  );
};

const ImportantQuestStyled = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 20vw;

  label {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    width: 50vw;
  }
`;

export default ImportantQuest;
