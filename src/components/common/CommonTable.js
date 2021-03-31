// React
import React from "react";
// Others
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ExportButton from "./ExportButton";
import ExportButtonPdf from "./ExportButtonPdf";

const CommonTable = (props) => {
  const excluded = props.arrayExcluded;
  const title = props.tableTitle;
  return (
    <ToolkitProvider keyField="id" data={props.arrayData} columns={props.columns} exportCSV>
      {(props) => (
        <div>
          <ExportButton {...props.csvProps}></ExportButton>
          <ExportButtonPdf
            columns={props.baseProps.columns}
            data={props.baseProps.data}
            tableTitle={title}
            arrayExcluded={excluded}
          ></ExportButtonPdf>
          <BootstrapTable
            {...props.baseProps}
            classes="table"
            filter={filterFactory()}
            pagination={paginationFactory()}
            hover
          />
        </div>
      )}
    </ToolkitProvider>
  );
};

export default CommonTable;
