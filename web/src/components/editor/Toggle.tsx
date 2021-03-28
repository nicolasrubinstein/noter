import Toggle from "react-toggle";
import React from "react";
import "./react-toggle.scss";

interface ToggleProps {
  important: boolean;
  setImportant: any;
}

const ToggleComponent = ({ important, setImportant }: ToggleProps) => {
  return (
    <Toggle
      defaultChecked={important}
      onChange={() => setImportant(!important)}
      className="react-toggle"
    />
  );
};

export default ToggleComponent;
