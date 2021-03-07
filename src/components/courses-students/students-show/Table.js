// React
import React, { useState, useEffect } from "react";
// OTHERS
import NavigationBar from "./../../nav-bar/NavigationBar";
import CommonTable from "./../../common/CommonTable";
import Loading from "./../../common/Loading"
import i18n from "./../../../i18n/i18n";
import getTableModel from "./TableModel";
import { handleGet, handleDelete } from "./../../handle/HandleManager";
import "./../../common/Table.css";

const Table = (props) => {

  // Declare constant
  const [course] = useState(props.location.state.data);
  const [arrayData, setArrayData] = useState();

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleGet(`courses/${course.id}/students`, setArrayData);
    }
    return () => { isMounted = false };
  }, [course]);

  if (arrayData === undefined) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-12">
        <div className="card card-table">
          <div className="card-header">
            <h3 align="center">{i18n.common.TitleCoursesStudentsShow}</h3>
            <h3 align="center">{i18n.common.headCourse + course.name}</h3>
            <h4 align="center">{i18n.studentTable.tableTitle}</h4>
          </div>
          <div className="card-body card-body-table">
            <CommonTable 
              arrayData={arrayData} 
              columns={getTableModel(handleDelete)}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
