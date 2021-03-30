import React, { useEffect, useState } from "react";
import "./react-toggle.scss";
import styled from "styled-components";
import TitleInput from "./TitleInput";
import ImportantQuest from "./ImportantQuest";
import EditorSection from "./EditorSection";
import Buttons from "./Buttons";
import EditorProps from "../../interfaces/EditorProps";
import CloseForm from "./CloseForm";

const EDCont: React.FC<EditorProps> = ({
  isSaveLoading,
  onClose,
  title,
  setTitle,
  text,
  setText,
  onSave,
  onDelete,
  isDeleteLoading,
  important,
  setImportant,
}) => {
  useEffect(() => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const [hasEdited, setHasEdited] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!count) {
      setCount(1);
    } else {
      setHasEdited(true);
    }
    // eslint-disable-next-line
  }, [text, title, important]);

  return (
    <SuperEditor>
      <EditorContainer>
        <CloseForm onClose={onClose} needsPrompt={hasEdited} />
        <TitleInput title={title} setTitle={setTitle} />
        <ImportantQuest important={important} setImportant={setImportant} />
        <EditorSection text={text} setText={setText} />
        <Buttons
          isSaveLoading={isSaveLoading}
          isDeleteLoading={isDeleteLoading}
          onSave={onSave}
          onDelete={onDelete}
          title={title}
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
  background: rgb(255, 255, 255, 0.9);
  height: 520px;
  width: 80vw;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 95vw;
    height: 540px;
  }
`;

export default EDCont;
