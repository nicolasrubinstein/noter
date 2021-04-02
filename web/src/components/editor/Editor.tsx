import React, { useEffect, useState } from "react";
import "./react-toggle.scss";
import styled from "styled-components";
import TitleInput from "./TitleInput";
import ImportantQuest from "./ImportantQuest";
import EditorSection from "./EditorSection";
import Buttons from "./Buttons";
import EditorProps from "../../interfaces/EditorProps";
import CloseForm from "./CloseForm";
import useTheme from "../../context/Theme";

const EDCont: React.FC<EditorProps> = (props) => {
  useEffect(() => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const [hasEdited, setHasEdited] = useState(false);
  const [count, setCount] = useState(0);
  const { theme }: any = useTheme();
  useEffect(() => {
    if (!count) {
      setCount(1);
    } else {
      setHasEdited(true);
    }
    // eslint-disable-next-line
  }, [props.text, props.title, props.important]);

  return (
    <SuperEditor>
      <EditorContainer
        bg={
          theme === "light"
            ? "rgb(255, 255, 255, 0.9)"
            : "rgba(31, 30, 30, 0.9)"
        }
      >
        <CloseForm onClose={props.onClose} needsPrompt={hasEdited} />
        <TitleInput title={props.title} setTitle={props.setTitle} />
        <ImportantQuest
          important={props.important}
          setImportant={props.setImportant}
        />
        <EditorSection text={props.text} setText={props.setText} />
        <Buttons
          isSaveLoading={props.isSaveLoading}
          isDeleteLoading={props.isDeleteLoading}
          onSave={props.onSave}
          onDelete={props.onDelete}
          title={props.title}
        />
      </EditorContainer>
    </SuperEditor>
  );
};
//
//
//
// Styles

const SuperEditor = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  margin-top: 100px;
`;

const EditorContainer = styled.div`
  background: ${(props: any) => props.bg};
  height: 520px;
  width: 80vw;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 95vw;
    height: 540px;
  }
`;

export default EDCont;
