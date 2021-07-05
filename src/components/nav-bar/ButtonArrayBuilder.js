import i18n from "./../../i18n/i18n"

const getArrayAdmin = (navigateForm, navigateTable) => {
  const buttonsArray = [
    {
      navigate: navigateForm,
      ButtonContent: i18n.navBar.buttonForm
    },
    {
      navigate: navigateTable,
      ButtonContent: i18n.navBar.buttonTable
    },
  ]
 return buttonsArray;
}

const getArrayScore = (navigateForm) => {
  const buttonsArrayScore = [
    {
      navigate: navigateForm,
      ButtonContent: i18n.navBar.buttonRegistryShow
    }
  ]
 return buttonsArrayScore;
}

const getArrayReports = (
  navigateReportStudent, 
  navigateReportCourse,
  navigateReportStudentCourse,
  navigateReportCourseStudent,
  navigateReportCertificate
  ) => {
  const buttonsArrayReports= [
    {
      navigate: navigateReportStudent,
      ButtonContent: i18n.navBar.buttonReportScoreStudent
    },
    {
      navigate: navigateReportCourse,
      ButtonContent: i18n.navBar.buttonReportScoreCourse
    },
    {
      navigate: navigateReportStudentCourse,
      ButtonContent: i18n.navBar.buttonReportScoreStudentCourse
    },
    {
      navigate: navigateReportCourseStudent,
      ButtonContent: i18n.navBar.buttonReportScoreCourseStudent
    },
    {
      navigate: navigateReportCertificate,
      ButtonContent: i18n.navBar.buttonReportCertificate
    }
  ]
 return buttonsArrayReports;
}

const getArrayOptions = (navigateSystem, navigateLogin) => {
  const buttonsArrayOptions= [
    {
      navigate: navigateSystem,
      ButtonContent: i18n.navBar.buttonSystemParameters
    },
    {
      navigate: navigateLogin,
      ButtonContent: i18n.navBar.buttonExit
    },
  ]
 return buttonsArrayOptions;
}

const arrayBuilder = {
  getArrayAdmin,
  getArrayScore,
  getArrayReports,
  getArrayOptions
}

export default arrayBuilder
