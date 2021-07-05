import React from 'react';
import { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../i18n/i18n";

const getTableModel = (navigateForm, handleEdit, handleDelete) => {

  const columns = [
    {
      dataField: 'id',
      text: i18n.courseTable.headerId,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'name',
      text: i18n.courseTable.headerName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '360px'
      }
    },
    {
      dataField: 'startDate',
      text: i18n.courseTable.headerStarDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    }, 
    {
      dataField: 'finishDate',
      text: i18n.courseTable.headerFinishDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.courseTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.courseTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'createdBy',
      text: i18n.courseTable.headerCreatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'updatedBy',
      text: i18n.courseTable.headerUpdatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'edit',
      text: i18n.courseTable.edit,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
      <button
        className="btn btn-warning"
        onClick={() => handleEdit(navigateForm, row)}
      >
        {i18n.courseTable.edit}
      </button>
      ),
    },
    {
      dataField: 'delete',
      text: i18n.courseTable.delete,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
        <button
        className="btn btn-danger"
        onClick={() => handleDelete("courses/", row.id)}
        >
          {i18n.courseTable.delete}
        </button>
      ),
    }
  ];
  return columns;
}

export default getTableModel;
