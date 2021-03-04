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
  navigateReportUsers, 
  navigateReportStudents,
  navigateReportCourses,
  navigateReportSubjects
  ) => {
  const buttonsArrayReports= [
    {
      navigate: navigateReportUsers,
      ButtonContent: i18n.navBar.buttonReportUsers
    },
    {
      navigate: navigateReportStudents,
      ButtonContent: i18n.navBar.buttonReportStudents
    },
    {
      navigate: navigateReportCourses,
      ButtonContent: i18n.navBar.buttonReportCourses
    },
    {
      navigate: navigateReportSubjects,
      ButtonContent: i18n.navBar.buttonReportSubjects
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
