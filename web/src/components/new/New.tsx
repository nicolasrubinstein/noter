import React, { useState } from "react";
import Editor from "../editor/Editor";
import url from "../../url";
import axios from "axios";
import useLoggedIn from "../../context/LoggedIn";
import useEditor from "../../context/Editor";

import "./New.scss";
const New = () => {
  interface PreEntry {
    title: string;
    text: string;
    isImportant: boolean;
  }
  const { userInfo }: any = useLoggedIn();
  const [showEditor, setShowEditor] = useState(false);
  const [isEditorSaveLoading, setIsEditorSaveLoading] = useState(false);
  const { setEntries }: any = useEditor();

  const [newEntry, setNewEntry] = useState<PreEntry>({
    title: "",
    text: "",
    isImportant: false,
  });
  const fetchEntries = async () => {
    const res = await axios({
      method: "get",
      url: `${url}/entries/${userInfo.googleId}`,
    });
    setEntries(res.data);
  };

  const handleSave = async () => {
    setIsEditorSaveLoading(true);
    await axios({
      method: "post",
      data: {
        googleId: userInfo.googleId,
        text: newEntry.text,
        title: newEntry.title,
        isImportant: newEntry.isImportant,
      },
      url: `${url}/entries`,
    });
    await fetchEntries();
    setShowEditor(false);
    setIsEditorSaveLoading(false);
  };
  return (
    <div className="new-container">
      <button className="new" onClick={() => setShowEditor(true)}>
        <img src="assets/add.png" alt="add" width="40" />
        New note
      </button>

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
          isDeleteLoading={null}
          onDelete={null}
        />
      )}
    </div>
  );
};

export default New;
