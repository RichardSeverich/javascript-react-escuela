import { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../../i18n/i18n";

const getTableModel = () => {

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
      text: i18n.reports.headerSubject,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '150px'
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
        width: '150px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.subjectTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'createdBy',
      text: i18n.subjectTable.headerCreatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '180px'
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
  ];
  return columns;
}

export default getTableModel;
