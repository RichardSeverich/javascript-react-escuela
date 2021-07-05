import React from 'react';
import { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../../i18n/i18n";

const getTableModel = (navigate) => {

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
      dataField: 'add',
      text: i18n.common.ButtonSelect,
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
