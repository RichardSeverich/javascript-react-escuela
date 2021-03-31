import React from "react";
import i18n from "./../../i18n/i18n";
import "./Table.css";

const ExportButton = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <button id="csv-button" className="btn btn-success" onClick={handleClick}>
      {i18n.userTable.tableExportButton}
    </button>
  );
};

export default ExportButton;
