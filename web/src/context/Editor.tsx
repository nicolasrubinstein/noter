import { createContext, useContext } from "react";

export const EditorContext: any = createContext(null);

const useEditor = () => useContext(EditorContext);

export default useEditor;
