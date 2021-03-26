import Toggle from "react-toggle";
import React from "react";
import "./react-toggle.scss";

const ToggleComponent = ({ important, setImportant }: any) => {
  return (
    <Toggle
      defaultChecked={important}
      onChange={() => setImportant(!important)}
      className="react-toggle"
    />
  );
};

export default ToggleComponent;
