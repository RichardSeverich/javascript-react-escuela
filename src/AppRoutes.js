// React
import React from "react";
import { Route, Switch } from "react-router-dom";
// Components
import App from "./App";
import Login from "./components/login/Login";
import NavigationBar from "./components/nav-bar/NavigationBar";
import UsersForm from "./components/users/Form";
import UsersTable from "./components/users/Table";
import StudentsForm from "./components/students/Form";
import StudentsTable from "./components/students/Table";
import CoursesForm from "./components/courses/Form";
import CoursesTable from "./components/courses/Table";
import SubjectsForm from "./components/subjects/Form";
import SubjectsTable from "./components/subjects/Table";
import CourseSubjectTableCourse from "./components/courses-subjects/courses/Table";
import CourseSubjectTableRegistrySubject from "./components/courses-subjects/subjects-registry/Table";
import CourseSubjectTableShowSubject from "./components/courses-subjects/subjects-show/Table";
import CourseStudentsTableCourse from "./components/courses-students/courses/Table";
import CourseStudentsTableRegistryStudents from "./components/courses-students/students-registry/Table";
import CourseStudentsTableShowStudents from "./components/courses-students/students-show/Table";
import ScoreCourse from "./components/score/courses/Table";
import ScoreCourseStudent from "./components/score/students/Table";
import ScoreCourseStudentSubject from "./components/score/student-course-subject/Table";
import ReportAllStudent from "./components/reports/student/table/Table";
import ReportAllStudentScore from "./components/reports/student/score-table/Table";
import ReportAllCourse from "./components/reports/course/course-table/Table";
import ReportAllCourseScore from "./components/reports/course/course-score/Table";
import ReportCourse from "./components/reports/course-student/courses/Table";
import ReportCourseStudent from "./components/reports/course-student/students/Table";
import ReportCourseStudentSubject from "./components/reports/course-student/course-student-subject/Table";
import ReportStudent from "./components/reports/student-course/students/Table";
import ReportStudentCourse from "./components/reports/student-course/courses/Table";
import ReportStudentCourseSubject from "./components/reports/student-course/student-course-subject/Table";
import ReportStudentCertificate from "./components/reports/certificate-student-course/students/Table";
import ReportStudentCourseCertificate from "./components/reports/certificate-student-course/courses/Table";
import ReportStudentCourseSubjectCertificate from "./components/reports/certificate-student-course/student-course-subject/Table";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/users-form" component={UsersForm} />
      <Route exact path="/users-table" component={UsersTable} />
      <Route exact path="/students-form" component={StudentsForm} />
      <Route exact path="/students-table" component={StudentsTable} />
      <Route exact path="/courses-form" component={CoursesForm} />
      <Route exact path="/courses-table" component={CoursesTable} />
      <Route exact path="/subjects-form" component={SubjectsForm} />
      <Route exact path="/subjects-table" component={SubjectsTable} />
      <Route exact path="/courses-subjects-table-courses" component={CourseSubjectTableCourse} />
      <Route exact path="/courses-subjects-table-registry-subjects" component={CourseSubjectTableRegistrySubject} />
      <Route exact path="/courses-subjects-table-show-subjects" component={CourseSubjectTableShowSubject} />
      <Route exact path="/courses-students-table-courses" component={CourseStudentsTableCourse} />
      <Route exact path="/courses-students-table-registry-students" component={CourseStudentsTableRegistryStudents} />
      <Route exact path="/courses-students-table-show-students" component={CourseStudentsTableShowStudents} />
      <Route exact path="/score-course" component={ScoreCourse} />
      <Route exact path="/score-course-student" component={ScoreCourseStudent} />
      <Route exact path="/score-course-student-subject" component={ScoreCourseStudentSubject} />
      <Route exact path="/report-all-student" component={ReportAllStudent} />
      <Route exact path="/report-all-student-score" component={ReportAllStudentScore} />
      <Route exact path="/report-all-course" component={ReportAllCourse} />
      <Route exact path="/report-all-course-score" component={ReportAllCourseScore} />
      <Route exact path="/report-course" component={ReportCourse} />
      <Route exact path="/report-course-student" component={ReportCourseStudent} />
      <Route exact path="/report-course-student-subject" component={ReportCourseStudentSubject} />
      <Route exact path="/report-student" component={ReportStudent} />
      <Route exact path="/report-student-course" component={ReportStudentCourse} />
      <Route exact path="/report-student-course-subject" component={ReportStudentCourseSubject} />
      <Route exact path="/report-student-certificate" component={ReportStudentCertificate} />
      <Route exact path="/report-certificate-student-course" component={ReportStudentCourseCertificate} />
      <Route exact path="/report-certificate-student-course-subject" component={ReportStudentCourseSubjectCertificate} />
      <Route exact path="/nav-bar" component={NavigationBar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Login} />
      <Route component={Login} />
    </Switch>
  </App>
);

export default AppRoutes;
