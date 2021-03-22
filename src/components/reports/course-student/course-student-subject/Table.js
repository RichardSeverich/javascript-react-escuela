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
  const [course] = useState(props.location.state.course);
  const [student] = useState(props.location.state.student);
  const [arrayScore, setArrayScore] = useState();
  const [arrayNoScore, setArrayNoScore] = useState();
  const [bandArray, setBandArray] = useState(true);
  const [studentAverage, setStudentAverage] = useState(0);

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleGet(`courses/${course.id}/students/${student.studentId}`, setArrayScore);
      handleGet(`courses/${course.id}/subjects`, setArrayNoScore);
    }
    return () => { isMounted = false };
  }, [course,student]);

  if (arrayScore === undefined || arrayNoScore === undefined) {
    return <Loading></Loading>;
  }

  if(bandArray) {
    let count = -1;
    let average = 0;
    let subjectsTotal = arrayNoScore.length;
    arrayNoScore.forEach(function(elementNoScore) {
      let existElement = false;
      let saveElement = {};
      saveElement = elementNoScore;
      arrayScore.forEach(function(elementScore) {
        if(elementScore.idSubject === elementNoScore.idSubject){
          existElement = true;
          average += parseInt(elementScore.subjectScore);
        }
      });
      if(!existElement){
        saveElement["subjectScore"] = 0;
        saveElement["id"] = count;
        count--;
        arrayScore.push(saveElement);
      }
    });
    if(subjectsTotal !== 0){
      average = average / subjectsTotal;
      setStudentAverage(average);
    }
    setArrayScore(arrayScore);
    setBandArray(false);
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-12">
        <div className="card card-table">
          <div className="card-header">
            <h3 align="center">{i18n.common.TitleReportsCourseStudent}</h3>
            <h3 align="center">{i18n.scoreHeadTable.headCourse + course.name}</h3>
            <h3 align="center">{i18n.scoreHeadTable.headStudent + student.studentName + " " + student.studentFatherLastName}</h3>
            <h4 align="center">{i18n.common.headAverage + " " + studentAverage}</h4>
          </div>
          <div className="card-body card-body-table">
            <CommonTable 
              arrayData={arrayScore}
              columns={getTableModel()}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
