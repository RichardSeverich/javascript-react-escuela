import React from 'react';
import { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../../i18n/i18n";

const getTableModel = (navigate) => {

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
        width: '150px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.courseTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.courseTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '150px'
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
      dataField: 'add',
      text: i18n.common.ButtonRegistration,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
      <button
        className="btn btn-success"
        onClick={() => navigate(row)}
      >
        {i18n.common.ButtonSelect}
      </button>
      ),
    },
  ];
  return columns;
}

export default getTableModel;
