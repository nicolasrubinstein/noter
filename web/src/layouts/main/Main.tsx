import React, { useState } from "react";
import useLoggedIn from "../../context/LoggedIn";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import { EditorContext } from "../../context/Editor";
import Editor from "../../components/editor/Editor";
import axios from "axios";
import url from "../../url";
import New from "../../components/new/New";

const Main = () => {
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [editorAttr, setEditorAttr] = useState({
    title: "",
    text: "",
    id: "",
    important: false,
  });
  const [isEditorSaveLoading, setIsEditorSaveLoading] = useState(false);
  const [isEditorDeleteLoading, setIsEditorDeleteLoading] = useState(false);

  const [entries, setEntries] = useState(null);

  const { userInfo }: any = useLoggedIn();

  const fetchEntries = async () => {
    const res = await axios({
      method: "get",
      url: `${url}/entries/${userInfo.googleId}`,
    });
    setEntries(res.data);
  };

  const handleEditorSave = async () => {
    setIsEditorSaveLoading(true);
    await axios({
      method: "patch",
      url: `${url}/entries`,
      data: {
        googleId: userInfo.googleId,
        entryId: editorAttr.id,
        newText: editorAttr.text || "<p></p>",
        newTitle: editorAttr.title,
        newIsImportant: editorAttr.important,
      },
    });
    await fetchEntries();
    setShowEditor(false);
    setIsEditorSaveLoading(false);
  };
  const handleEditorDelete = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsEditorDeleteLoading(true);
    await axios({
      method: "delete",
      url: `${url}/entries`,
      data: {
        googleId: userInfo.googleId,
        entryId: editorAttr.id,
      },
    });
    await fetchEntries();
    setShowEditor(false);
    setEditorAttr({ title: "", text: "", id: "", important: false });
    setIsEditorDeleteLoading(false);
  };
  return (
    <div>
      <EditorContext.Provider
        value={{
          showEditor,
          setShowEditor,
          editorAttr,
          setEditorAttr,
          entries,
          setEntries,
        }}
      >
        {showEditor && (
          <Editor
            isSaveLoading={isEditorSaveLoading}
            onSave={handleEditorSave}
            title={editorAttr.title}
            text={editorAttr.text}
            onClose={() => {
              setShowEditor(false);
              setEditorAttr({ title: "", text: "", id: "", important: false });
            }}
            onDelete={handleEditorDelete}
            setText={(t: string) => setEditorAttr({ ...editorAttr, text: t })}
            setTitle={(t: string) => setEditorAttr({ ...editorAttr, title: t })}
            isDeleteLoading={isEditorDeleteLoading}
            important={editorAttr.important}
            setImportant={(newVal: boolean) =>
              setEditorAttr({ ...editorAttr, important: newVal })
            }
          />
        )}
        <Header />
        <New />
        <List />
      </EditorContext.Provider>
    </div>
  );
};

export default Main;
