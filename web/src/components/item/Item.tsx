import React from "react";
import useEditor from "../../context/Editor";
import styled from "styled-components";
import LaunchButton from "./LaunchButton";
import Important from "./Important";
import useTheme from "../../context/Theme";

interface ItemProps {
  text: string;
  title: string;
  id: string;
  isImportant: boolean;
}

const Item = ({ text, title, id, isImportant }: ItemProps) => {
  const { setShowEditor, setEditorAttr }: any = useEditor();
  const { theme }: any = useTheme();

  const launchEditor = () => {
    setEditorAttr({ text, title, id, important: isImportant });
    setShowEditor(true);
  };

  return (
    <ItemSuper>
      <ItemStyled
        onClick={launchEditor}
        bg={theme === "light" ? "white" : "grey"}
      >
        <Important isImportant={isImportant} />
        <h3>{title}</h3>
        <LaunchButton launch={launchEditor} />
      </ItemStyled>
    </ItemSuper>
  );
};

const ItemSuper = styled.li`
  width: 100vw;
  margin-left: -44px;
`;

const ItemStyled = styled.div`
  margin: 0 auto;
  cursor: pointer;
  width: 70vw;
  background: ${(props: any) => props.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-radius: 5px;
  border-left: 10px solid ${(props: any) => props.bg};

  &:hover {
    border-left: 10px solid orange;

    @media (max-width: 499px) {
      border-left: 10px solid white;
    }
  }
  @media (max-width: 600px) {
    width: 90vw;
  }
`;

export default Item;
