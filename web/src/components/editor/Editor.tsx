import React, { useEffect } from "react";
import "./Editor.scss";
import { Editor } from "@tinymce/tinymce-react";
import Toggle from "react-toggle";
import "./react-toggle.scss";

interface EditorProps {
  isSaveLoading: boolean;
  onClose: any;
  title: string;
  setTitle: any;
  text: string;
  setText: any;
  onSave: any;
  onDelete: any;
  isDeleteLoading: boolean | null;
  important: boolean;
  setImportant: any;
}

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
    document.getElementById("editor")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="super-ed" id="editor">
      <div
        className="ed-container"
        // onSubmit={(e) => {
        //   e.preventDefault();
        // }}
      >
        <button className="close-form">
          <img
            src="assets/close.png"
            alt="close"
            width="50"
            onClick={onClose}
          />
        </button>
        <div style={{ textAlign: "center", marginTop: "-30px" }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={25}
          />
        </div>
        <div className="important-quest">
          <label>Important</label>
          <div>
            <Toggle
              defaultChecked={important}
              onChange={() => setImportant(!important)}
              className="react-toggle"
            />
          </div>
        </div>
        <section className="editor">
          {(
            <Editor
              value={text}
              init={{
                height: 300,
                width: "70vw",
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor |alignleft aligncenter alignright alignjustify |bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={(content) => setText(content)}
              apiKey="82jfijyod37iho52z28udyqd6yrl71w9xlbwn2hp4c5nxcm2"
            />
          ) || "Loading Editor..."}
        </section>
        <div className="buttons">
          <button
            onClick={(e: React.FormEvent) => {
              e.preventDefault();
              if (title) {
                onSave();
              }
            }}
            className="btn-submit-edit"
          >
            {isSaveLoading ? "Saving..." : "Save"}
          </button>
          {onDelete && (
            <button onClick={onDelete} className="btn-submit-delete">
              {isDeleteLoading ? "Deleting..." : "Delete"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EDCont;
