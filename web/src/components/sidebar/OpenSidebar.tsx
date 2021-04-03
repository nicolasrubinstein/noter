import React from "react";
import styled from "styled-components";
interface Props {
  isOpen: boolean;
  toggle: any;
}

const OpenSidebar: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <Open>
      <button onClick={toggle}>{isOpen ? ">" : "<"}</button>
    </Open>
  );
};

const Open = styled.div`
  position: fixed;
  right: 0;
  margin-top: 50vh;
`;

export default OpenSidebar;
