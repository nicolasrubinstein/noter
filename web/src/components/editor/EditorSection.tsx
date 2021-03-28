import React from "react";
import styled from "styled-components";
import { Editor } from "@tinymce/tinymce-react";

interface EditorSectionProps {
  text: string;
  setText: any;
}

const EditorSection = ({ text, setText }: EditorSectionProps) => {
  return (
    <EditorSectionStyled>
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
    </EditorSectionStyled>
  );
};

const EditorSectionStyled = styled.section`
  display: flex;
  justify-content: center;
`;

export default EditorSection;
