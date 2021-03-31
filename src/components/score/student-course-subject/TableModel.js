import React from 'react';
import { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../i18n/i18n";

const getTableModel = (modal) => {

  const columns = [
    {
      dataField: 'id',
      text: i18n.subjectTable.headerId,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'subjectName',
      text: i18n.subjectTable.headerName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '200px'
      }
    },
    {
      dataField: 'subjectScore',
      text: i18n.subjectTable.headerScore,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.subjectTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '200px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.subjectTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '200px'
      }
    },
    {
      dataField: 'createdBy',
      text: i18n.subjectTable.headerCreatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'updatedBy',
      text: i18n.subjectTable.headerUpdatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'add',
      text: i18n.common.ButtonQualify,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
      <button
        className="btn btn-success"
        id="button-qualify"
        data-toggle="modal" 
        data-target="#qualifyModal"
        onClick={() => modal(row)}
      >
        {i18n.common.ButtonQualify}
      </button>
      ),
    },
  ];
  return columns;
}

export default getTableModel;
