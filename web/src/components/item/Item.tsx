import React from "react";
import "./Item.scss";
import useEditor from "../../context/Editor";

interface ItemProps {
  text: string;
  title: string;
  id: string;
  isImportant: boolean;
}

const Item = ({ text, title, id, isImportant }: ItemProps) => {
  const { setShowEditor, setEditorAttr }: any = useEditor();

  const launchEditor = () => {
    setEditorAttr({ text, title, id, important: isImportant });
    setShowEditor(true);
  };

  return (
    <div className="item-super">
      <div className="item">
        <div className="important">
          {isImportant && (
            <img src="assets/warning.png" alt="important" width="30" />
          )}
        </div>

        <h3>{title}</h3>
        <button onClick={launchEditor}>
          <img src="assets/eye.png" alt="open" width="30" height="30" />
        </button>
      </div>
    </div>
  );
};

export default Item;
