import React, { useEffect } from "react";
import url from "../../url";
import axios from "axios";
import useLoggedIn from "../../context/LoggedIn";
import useEditor from "../../context/Editor";
import Entry from "../../interfaces/Entry";
import Item from "../item/Item";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const List = () => {
  const { userInfo }: any = useLoggedIn();
  const { entries, setEntries }: any = useEditor();

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await axios({
        method: "get",
        url: `${url}/entries/${userInfo.googleId}`,
      });
      setEntries(res.data);
    };
    fetchEntries();
  }, [setEntries, userInfo.googleId]);

  return (
    <ListContainer>
      {!entries && (
        <LoaderContainer>
          <Loader type="BallTriangle" color="orange" height={100} width={100} />
        </LoaderContainer>
      )}
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

const LoaderContainer = styled.div`
  width: 100vw;
  margin-left: -40px;
`;

export default List;
