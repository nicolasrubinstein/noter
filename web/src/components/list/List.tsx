import React, { useEffect, useState } from "react";
import url from "../../url";
import axios from "axios";
import useLoggedIn from "../../context/LoggedIn";
import useEditor from "../../context/Editor";
import Entry from "../../interfaces/Entry";
import "./List.scss";
import Item from "../item/Item";

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
    <div className="list-container">
      <ul>
        {entries?.map((entry: Entry) => (
          <Item
            text={entry.text}
            key={entry._id}
            title={entry.title}
            id={entry._id}
            isImportant={entry.isImportant}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
