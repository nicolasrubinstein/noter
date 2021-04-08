import React, { useState } from "react";
import styled from "styled-components";
import { Editor as Tiny } from "@tinymce/tinymce-react";
import useTheme, { ThemeHook } from "../../context/Theme";

interface EditorSectionProps {
  text: string;
  setText: any;
}

const EditorSection = ({ text, setText }: EditorSectionProps) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { theme }: ThemeHook = useTheme();
  return (
    <EditorSectionStyled>
      <Tiny
        value={text}
        init={{
          height: 300,
          width: window.innerWidth > 499 ? "70vw" : "100vw",
          menubar: false,
          // theme: "advanced",
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor |alignleft aligncenter alignright alignjustify |bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={(content) => setText(content)}
        onBeforeSetContent={() => setHasLoaded(true)}
        apiKey="82jfijyod37iho52z28udyqd6yrl71w9xlbwn2hp4c5nxcm2"
      />

      {!hasLoaded && (
        <Loading txt={theme === "light" ? "black" : "white"}>
          Loading editor...
        </Loading>
      )}
    </EditorSectionStyled>
  );
};

const EditorSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  height: 300px;
`;

const Loading = styled.h3`
  width: 100%;
  text-align: center;
  margin-left: -160px;
  color: ${(props: any) => props.txt};
`;

export default EditorSection;
