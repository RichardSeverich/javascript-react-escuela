import React from 'react';
import { textFilter, dateFilter, selectFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../i18n/i18n";

const getTableModel = (handleAdd) => {

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
      dataField: 'dni',
      text: i18n.studentTable.headerDni,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'name',
      text: i18n.studentTable.headerName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'fatherLastName',
      text: i18n.studentTable.headerFatherLastName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'motherLastName',
      text: i18n.studentTable.headerMotherLastName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    }, 
    {
      dataField: 'birthDate',
      text: i18n.studentTable.headerBirthdate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'telephone',
      text: i18n.studentTable.headerTelephone,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '180px'
      }
    },
    {
      dataField: 'address',
      text: i18n.studentTable.headerAddress,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '250px'
      }
    },
    {
      dataField: 'email',
      text: i18n.studentTable.headerEmail,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '250px'
      }
    },
    {
      dataField: 'yunta',
      text: i18n.studentTable.headerYunta,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '140px'
      }
    },
    {
      dataField: 'grade',
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
      dataField: 'weapon',
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
      dataField: 'promo',
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
      dataField: 'add',
      text: i18n.common.ButtonRegistration,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
      <button
        className="btn btn-success"
        onClick={() => handleAdd(row)}
      >
        {i18n.common.ButtonRegistration}
      </button>
      ),
    },
  ];
  return columns;
}

export default getTableModel;
