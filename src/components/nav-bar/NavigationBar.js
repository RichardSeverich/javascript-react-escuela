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
  const navigateCoursesForm = () => { history.push("/courses-form");}
  const navigateCoursesTable = () => { history.push("/courses-table");}
  const navigateSubjectsForm = () => { history.push("/subjects-form");}
  const navigateSubjectsTable = () => { history.push("/subjects-table");}
  const navigateStudiesPlanForm = () => { history.push({
    pathname: "/courses-subjects-table-courses",
    state: { 
      isRegistry: true,
    }
  })};
  const navigateStudiesPlanTable = () => { history.push({
    pathname: "/courses-subjects-table-courses",
    state: { 
      isRegistry: false,
    }
  })};
  const navigateInscriptionsForm = () => { history.push({
    pathname: "/courses-students-table-courses",
    state: { 
      isRegistry: true,
    }
  })};
  const navigateInscriptionsTable = () => { history.push({
    pathname: "/courses-students-table-courses",
    state: { 
      isRegistry: false,
    }
  })};
  const navigateScoresForm = () => { history.push("/score-course");}
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
  const btnScores = arrayBuilder.getArrayScore(navigateScoresForm);
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
