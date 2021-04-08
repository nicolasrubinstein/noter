import React from "react";
import styled from "styled-components";
import useTheme, { ThemeHook } from "../../context/Theme";
import "./react-toggle.scss";
import Toggle from "./Toggle";

interface ImportantQuestProps {
  important: boolean;
  setImportant: any;
}

const ImportantQuest = ({ important, setImportant }: ImportantQuestProps) => {
  const { theme }: ThemeHook = useTheme();
  return (
    <ImportantQuestStyled txt={theme === "light" ? "black" : "white"}>
      <label>Important</label>
      <div>
        <Toggle important={important} setImportant={setImportant} />
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
    color: ${(props: any) => props.txt};
  }
  @media (max-width: 900px) {
    width: 50vw;
  }
`;

export default ImportantQuest;
