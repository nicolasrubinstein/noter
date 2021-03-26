import React from "react";
import styled from "styled-components";

const Important = ({ isImportant }: any) => {
  return (
    <ImportantStyled>
      {isImportant && (
        <img src="assets/warning.png" alt="important" width="30" />
      )}
    </ImportantStyled>
  );
};

const ImportantStyled = styled.div`
  width: 30px;
  margin-left: 20px;
`;

export default Important;
