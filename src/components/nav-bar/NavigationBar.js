// React
import React from "react";
import { useHistory } from "react-router";
// Others
import ButtonGroup from "./ButtonGroup";
import arrayBuilder from "./ButtonArrayBuilder"
import i18n from "./../../i18n/i18n"
import logo from "./logo.svg";
import "./NavigationBar.css";

const NavigationBar = () => {

  const history = useHistory();
  const navigateUsersForm = () => { history.push("/users-form");}
  const navigateUsersTable = () => { history.push("/users-table");}
  const navigateStudentsForm = () => { history.push("/students-form");}
  const navigateStudentsTable = () => { history.push("/students-table");}
  const navigateCoursesForm = () => { history.push("/");}
  const navigateCoursesTable = () => { history.push("/");}
  const navigateSubjectsForm = () => { history.push("/");}
  const navigateSubjectsTable = () => { history.push("/");}
  const navigateStudiesPlanForm = () => { history.push("/");}
  const navigateStudiesPlanTable = () => { history.push("/");}
  const navigateInscriptionsForm = () => { history.push("/inscription-form");}
  const navigateInscriptionsTable = () => { history.push("/inscription-table");}
  const navigateScoresForm = () => { history.push("/");}
  const navigateScoresTable = () => { history.push("/");}
  const navigateReportUsers = () => { history.push("/");}
  const navigateReportStudents = () => { history.push("/");}
  const navigateReportCourses= () => { history.push("/");}
  const navigateReportSubjects= () => { history.push("/");}
  const navigateSystem= () => { history.push("/");}
  const navigateLogin = () => { history.push("/login");}
  const btnUsers = arrayBuilder.getArrayAdmin(navigateUsersForm, navigateUsersTable);
  const btnStudents = arrayBuilder.getArrayAdmin(navigateStudentsForm, navigateStudentsTable);
  const btnCourses = arrayBuilder.getArrayAdmin(navigateCoursesForm, navigateCoursesTable);
  const btnSubjects = arrayBuilder.getArrayAdmin(navigateSubjectsForm, navigateSubjectsTable);
  const btnInscriptions = arrayBuilder.getArrayAdmin(navigateInscriptionsForm, navigateInscriptionsTable);
  const btnScores = arrayBuilder.getArrayAdmin(navigateScoresForm, navigateScoresTable);
  const btnStudiesPlan = arrayBuilder.getArrayAdmin(navigateStudiesPlanForm, navigateStudiesPlanTable);
  const btnReports = arrayBuilder.getArrayReports(
    navigateReportUsers, 
    navigateReportStudents,
    navigateReportCourses,
    navigateReportSubjects
  );
  const btnOptions = arrayBuilder.getArrayOptions(navigateSystem, navigateLogin)

  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="/nav-bar">
        <img src={logo} className="App-logo-bar" alt="logo" />
      </a>
      <ul className="navbar-nav">
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsUsers}
          buttonsArray={btnUsers}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonStudents}
          buttonsArray={btnStudents}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsCourses}
          buttonsArray={btnCourses}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsSubjects}
          buttonsArray={btnSubjects}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsStudiesPlan}
          buttonsArray={btnStudiesPlan}
        ></ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsInscriptions}
          buttonsArray={btnInscriptions}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsScores}
          buttonsArray={btnScores}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsReports}
          buttonsArray={btnReports}
        >
        </ButtonGroup>
      </ul>
      <ul className="navbar-nav ml-auto nav-flex-icons">
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsOptions}
          buttonsArray={btnOptions}
        >
        </ButtonGroup>
      </ul>
    </nav>
  </div>
  );
};

export default NavigationBar;
