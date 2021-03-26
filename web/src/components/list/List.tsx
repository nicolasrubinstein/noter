import React, { useEffect, useState } from "react";
import url from "../../url";
import axios from "axios";
import useLoggedIn from "../../context/LoggedIn";
import useEditor from "../../context/Editor";
import Entry from "../../interfaces/Entry";
import Item from "../item/Item";
import styled from "styled-components";

const List = () => {
  const { userInfo }: any = useLoggedIn();
  const { entries, setEntries }: any = useEditor();

  const fetchEntries = async () => {
    const res = await axios({
      method: "get",
      url: `${url}/entries/${userInfo.googleId}`,
    });
    setEntries(res.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <ListContainer>
      {entries?.map((entry: Entry) => (
        <Item
          text={entry.text}
          key={entry._id}
          title={entry.title}
          id={entry._id}
          isImportant={entry.isImportant}
        />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  list-style-type: none;
  margin-top: 27px;
  text-align: center;
`;

export default List;
