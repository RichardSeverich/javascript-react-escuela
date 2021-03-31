import React from "react";
import i18n from "./../../i18n/i18n";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import "./Table.css";
import imageCondor from "./../nav-bar/logo-condores.jpg";

const ExportButtonPdf = (props) => {
  const handleClick = () => {
    const doc = new jsPDF('landscape');
    doc.addImage(imageCondor, 'jpg', 5, 5, 30, 30,'alias','FAST');
    doc.text(37, 13, props.tableTitle);
    const arrayColumns = [];
    props.columns.forEach(function (element) {
      if (props.arrayExcluded) {
        if (!props.arrayExcluded.includes(element.dataField)) {
          const value = { header: element.text, dataKey: element.dataField };
          arrayColumns.push(value);
        }
      } else {
        const value = { header: element.text, dataKey: element.dataField };
        arrayColumns.push(value);
      }
    });
    doc.autoTable({
      margin: { horizontal: 7, top: 38 },
      body: props.data,
      columns: arrayColumns
    });
    doc.save('table.pdf');
  };

  return (
    <button id="pdf-button" className="btn btn-primary" onClick={handleClick}>
      {i18n.userTable.tableExportButtonPdf}
    </button>
  );
};

export default ExportButtonPdf;