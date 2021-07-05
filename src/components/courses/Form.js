// React
import React, { useState } from "react";
// Components
import NavigationBar from "./../nav-bar/NavigationBar";
import useInput from "./../hooks/UseInput";
import FormInput from "./../common/FormInput";
import i18n from "./../../i18n/i18n";
import handleValidations from "./HandleValidations";
import { handleCreate, handleEdit } from "./../handle/HandleManager";

const Form = (props) => {

  const colorFormReset = {
    name: "",
    startDate:"",
    finishDate:""
  }

  const [isEdit, setIsEdit] = useState(props.location.state);
  const [colorFormText, setColorFormText] = useState(colorFormReset);

  let id = isEdit ? isEdit.data.id : "";
  let name = isEdit ? isEdit.data.name : "";
  let startDate = isEdit ? isEdit.data.startDate : "";
  let finishDate = isEdit ? isEdit.data.finishDate : "";

  const { value: valueName, bind: bindName, reset: resetName } = useInput(name);
  const { value: valueStartDate, bind: bindStartDate, reset: resetStartDate } = useInput(startDate);
  const { value: valueFinishDate, bind: bindFinishDate, reset: resetFinishDate } = useInput(finishDate);

  const handleReset = () => {
    resetName();
    resetStartDate();
    resetFinishDate();
  }
  const handleAdd = () => {
    const username = window.localStorage.getItem("username");
    let body = {
      name: valueName,
      startDate: valueStartDate,
      finishDate: valueFinishDate,
      createdBy: username,
      updatedBy: username,
    }
    console.log(body);
    let isValid = handleValidations(body, setColorFormText, colorFormReset);
    if(isValid){
      if(isEdit) {
        handleEdit("courses/", body, id, handleReset, setIsEdit)
      } else {
        handleCreate("courses/", body, handleReset);
      }
    }
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-4">
        <div className="card">
          <div className="card-header">
            <h3 align="center">{i18n.courseForm.formTitle}</h3>
          </div>
          <div className="card-body">
            <form className="">
              <FormInput
                labelContent={i18n.courseForm.formLabelName} 
                formText={i18n.courseForm.formTextName}
                color={colorFormText.name}
                minLength="3"
                maxLength="120"
                bind={bindName}
              ></FormInput>
              <FormInput
                labelContent={i18n.courseForm.formLabelStartDate} 
                formText={i18n.courseForm.formTextStartDate}
                color={colorFormText.startDate}
                type="date"
                bind={bindStartDate}
              ></FormInput>
              <FormInput
                labelContent={i18n.courseForm.formLabelFinishDate} 
                formText={i18n.courseForm.formTextFinishDate}
                color={colorFormText.finishDate}
                type="date"
                bind={bindFinishDate}
              ></FormInput>
              <div className="text-center">
                <button
                  className="btn btn-success"
                  onClick={handleAdd}
                  type="button" >
                  {i18n.common.ButtonRegistration}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
