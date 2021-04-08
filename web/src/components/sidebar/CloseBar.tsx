import React from "react";
import styled from "styled-components";
interface Props {
  close: any;
}

const CloseBar: React.FC<Props> = ({ close }) => {
  return (
    <Close>
      <Btn onClick={close}>
        <img src="assets/close.svg" alt="close" width="25" height="25" />
      </Btn>
    </Close>
  );
};

const Close = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

const Btn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin-top: 15px;
`;

export default CloseBar;
