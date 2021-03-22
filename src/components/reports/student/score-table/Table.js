// React
import React, { useState, useEffect } from "react";
// OTHERS
import NavigationBar from "./../../../nav-bar/NavigationBar";
import CommonTable from "./../../../common/CommonTable";
import Loading from "./../../../common/Loading"
import i18n from "./../../../../i18n/i18n";
import getTableModel from "./TableModel";
import { handleGet } from "./../../../handle/HandleManager";
import "./../../../common/Table.css";

const Table = (props) => {

  // Declare constant
  const [student] = useState(props.location.state.student);
  const [arrayData, setArrayData] = useState();

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleGet(`students/${student.id}/courses/subjects`, setArrayData);
    }
    return () => { isMounted = false };
  }, [student]);

  if (arrayData === undefined) {
    return <Loading></Loading>;
  }

  let index = 1000;
  arrayData.forEach(function(element) {
    element.id = index;
    index++;
  });

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-12">
        <div className="card card-table">
          <div className="card-header">
            <h3 align="center">{i18n.common.TitleReportsStudent}</h3>
            <h3 align="center">{i18n.common.headStudent + student.name + " " + student.fatherLastName}</h3>
          </div>
          <div className="card-body card-body-table">
            <CommonTable 
              arrayData={arrayData}
              columns={getTableModel()}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
