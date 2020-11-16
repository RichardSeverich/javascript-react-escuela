import React from 'react';
import { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../i18n/i18n";

const getTableModel = (handleDelete) => {

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
      dataField: 'name',
      text: i18n.subjectTable.headerName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '360px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.subjectTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.subjectTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
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
      dataField: 'delete',
      text: i18n.studentTable.delete,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
        <button
        className="btn btn-danger"
        onClick={() => handleDelete("courses-subjects/", row.id)}
        >
          {i18n.studentTable.delete}
        </button>
      ),
    }
  ];
  return columns;
}

export default getTableModel;
