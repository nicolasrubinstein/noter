import { createContext, useContext } from "react";
import Entry from "../interfaces/Entry";

interface EditorAttr {
  title: string;
  text: string;
  id: string;
  important: boolean;
}

export interface EditorHook {
  showEditor?: boolean;
  setShowEditor?: any;
  editorAttr?: EditorAttr;
  setEditorAttr?: any;
  entries?: Entry[];
  setEntries?: Function;
}

export const EditorContext = createContext<EditorHook>({
  showEditor: false,
  setShowEditor() {},
  editorAttr: { title: "", text: "", id: "", important: false },
  setEditorAttr() {},
  entries: [],
  setEntries() {},
});

const useEditor = () => useContext(EditorContext);

export default useEditor;
