import React, { useEffect } from "react";
import Toggle from "react-toggle";
import "./react-toggle.scss";
import styled from "styled-components";
import CloseForm from "./CloseForm";
import TitleInput from "./TitleInput";
import ImportantQuest from "./ImportantQuest";
import EditorSection from "./EditorSection";
import Buttons from "./Buttons";
import EditorProps from "../../interfaces/EditorProps";

const EDCont = ({
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
}: EditorProps) => {
  useEffect(() => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <SuperEditor>
      <EditorContainer>
        <CloseForm onClose={onClose} />
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
  }
`;

export default EDCont;
