import React from 'react';
import { textFilter, dateFilter, selectFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../i18n/i18n";

const getTableModel = (handleDelete) => {

  const selectOptionsGrade = {
    SBTTE: 'SBTTE',
    ALF: 'ALF'
  };

  const selectOptionsWeapon = {
    CAB: 'CAB',
    INF: 'INF',
    ART: 'ART',
    CGON: 'CGON',
    COM: 'COM',
    AAV: 'AAV',
    ING: 'ING'
  };

  const columns = [
    {
      dataField: 'id',
      text: i18n.studentTable.headerId,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'studentDni',
      text: i18n.studentTable.headerDni,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'studentName',
      text: i18n.studentTable.headerName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'studentFatherLastName',
      text: i18n.studentTable.headerFatherLastName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'studentMotherLastName',
      text: i18n.studentTable.headerMotherLastName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    }, 
    {
      dataField: 'studentYunta',
      text: i18n.studentTable.headerYunta,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '140px'
      }
    },
    {
      dataField: 'studentGrade',
      text: i18n.studentTable.headerGrade,
      sort: true,
      filter: selectFilter({
        options: selectOptionsGrade
      }),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'studentWeapon',
      text: i18n.studentTable.headerWeapon,
      sort: true,
      filter: selectFilter({
        options: selectOptionsWeapon
      }),
      headerStyle: {
        width: '140px'
      }
    },
    {
      dataField: 'studentPromo',
      text: i18n.studentTable.headerPromo,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.studentTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.studentTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'createdBy',
      text: i18n.studentTable.headerCreatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'updatedBy',
      text: i18n.studentTable.headerUpdatedBy,
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
        onClick={() => handleDelete("courses-students/", row.id)}
        >
          {i18n.studentTable.delete}
        </button>
      ),
    }
  ];
  return columns;
}

export default getTableModel;
