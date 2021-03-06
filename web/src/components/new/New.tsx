import React, { useState } from "react";
import Editor from "../editor/Editor";
import url from "../../url";
import axios from "axios";
import useLoggedIn, { LoggedInHook } from "../../context/LoggedIn";
import useEditor, { EditorHook } from "../../context/Editor";
import styled from "styled-components";

const New = () => {
  interface PreEntry {
    title: string;
    text: string;
    isImportant: boolean;
  }
  const { userInfo }: LoggedInHook = useLoggedIn();
  const [showEditor, setShowEditor] = useState(false);
  const [isEditorSaveLoading, setIsEditorSaveLoading] = useState(false);
  const { setEntries }: EditorHook = useEditor();

  const [newEntry, setNewEntry] = useState<PreEntry>({
    title: "",
    text: "",
    isImportant: false,
  });
  const fetchEntries = async () => {
    const res = await axios({
      method: "get",
      url: `${url}/entries/${userInfo?.googleId}`,
    });
    if (setEntries) setEntries(res.data);
  };

  const handleSave = async () => {
    setIsEditorSaveLoading(true);
    await axios({
      method: "post",
      data: {
        googleId: userInfo?.googleId,
        text: newEntry.text,
        title: newEntry.title,
        isImportant: newEntry.isImportant,
      },
      url: `${url}/entries`,
    });
    await fetchEntries();
    setNewEntry({
      title: "",
      text: "",
      isImportant: false,
    });
    setShowEditor(false);
    setIsEditorSaveLoading(false);
  };
  return (
    <NewContainer>
      <StyledNew onClick={() => setShowEditor(true)}>
        <img src="assets/add.svg" alt="add" width="40" />
        <p>New note</p>
      </StyledNew>

      {showEditor && (
        <Editor
          isSaveLoading={isEditorSaveLoading}
          title={newEntry.title}
          text={newEntry.text}
          important={newEntry.isImportant}
          setTitle={(title: string) => setNewEntry({ ...newEntry, title })}
          setText={(text: string) => setNewEntry({ ...newEntry, text })}
          setImportant={(newVal: boolean) =>
            setNewEntry({ ...newEntry, isImportant: newVal })
          }
          onClose={() => {
            setShowEditor(false);
            setNewEntry({
              title: "",
              text: "",
              isImportant: false,
            });
          }}
          onSave={handleSave}
        />
      )}
    </NewContainer>
  );
};

const NewContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const StyledNew = styled.button`
  background: orange;
  border: none;
  height: 80px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* margin-left: 40px; */
  img {
    margin-top: 7px;
  }
  img,
  p {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  &:hover {
    background: rgb(190, 144, 58);
    cursor: pointer;

    @media (max-width: 499px) {
      background: orange;
    }
  }
`;

export default New;
