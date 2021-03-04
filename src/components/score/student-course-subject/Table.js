// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
// OTHERS
import NavigationBar from "./../../nav-bar/NavigationBar";
import CommonTable from "./../../common/CommonTable";
import Loading from "./../../common/Loading"
import i18n from "./../../../i18n/i18n";
import getTableModel from "./TableModel";
import { handleGet, handleCreate } from "./../../handle/HandleManager";
import "./../../common/Table.css";

const Table = (props) => {

  // Declare constant
  const [course] = useState(props.location.state.course);
  const [student] = useState(props.location.state.student);
  const [arrayScore, setArrayScore] = useState();
  const [arrayNoScore, setArrayNoScore] = useState();
  const [band, setBand] = useState(true);
  const history = useHistory();

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleGet(`courses/${course.id}/students/${student.id}`, setArrayScore);
      handleGet(`courses/${course.id}/subjects`, setArrayNoScore);
    }
    return () => { isMounted = false };
  }, [course,student]);

  const handleReset = () => {window.location.reload();};

  const handleAdd = (row) => {
    const username = window.localStorage.getItem("username");
    let body = {
      idSubject: row.id,
      idStudent: student.id,
      score: row.score,
      createdBy: username,
      updatedBy: username,
    }
    handleCreate("subjects-students", body, handleReset);
  };

  if (arrayScore === undefined || arrayNoScore === undefined) {
    return <Loading></Loading>;
  }

  if(band) {
    let count = -1;
    arrayNoScore.forEach(function(elementNoScore) {
      let band = false;
      let saveElement = {};
      arrayScore.forEach(function(elementScore) {
        saveElement = elementNoScore;
        if(elementScore.idSubject === elementNoScore.idSubject){
          band = true;
        }
      });
      if(band == false){
        saveElement["subjectScore"] = 0;
        saveElement["id"] = count;
        count--;
        arrayScore.push(saveElement);
      }
    });
    setArrayScore(arrayScore);
    setBand(false);
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-12">
        <div className="card card-table">
          <div className="card-header">
            <h3 align="center">{i18n.common.TitleScore}</h3>
            <h3 align="center">{i18n.scoreHeadTable.headCourse + course.name}</h3>
            <h3 align="center">{i18n.scoreHeadTable.headStudent + student.studentName + " " + student.studentFatherLastName}</h3>
            <h4 align="center">{i18n.subjectTable.tableTitle}</h4>
          </div>
          <div className="card-body card-body-table">
            <CommonTable 
              arrayData={arrayScore}
              columns={getTableModel(handleAdd)}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
