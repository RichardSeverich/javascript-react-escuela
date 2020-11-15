// React
import React, { useState } from "react";
// Components
import NavigationBar from "./../nav-bar/NavigationBar";
import useInput from "./../hooks/UseInput";
import FormInput from "./../common/FormInput";
import FormDropDown from "./../common/FormDropDown";
import i18n from "./../../i18n/i18n";
import handleValidations from "./HandleValidations";
import { handleCreate, handleEdit } from "./../handle/HandleManager";

const Form = (props) => {

  const colorFormReset = {
    dni: "",
    name: "",
    fatherLastName: "",
    motherLastName: "",
    birthDate: "",
    telephone: "",
    address: "",
    email: "",
    yunta: "",
    grade: "",
    weapon: "",
    promo: "",
  }
  
  const [isEdit, setIsEdit] = useState(props.location.state);
  const [colorFormText, setColorFormText] = useState(colorFormReset);

  console.log("isEdit " + isEdit);
  let id = isEdit ? isEdit.data.id : "";
  let dni = isEdit ? isEdit.data.dni : "";
  let name = isEdit ? isEdit.data.name : "";
  let fatherLastName = isEdit ? isEdit.data.fatherLastName : "";
  let motherLastName = isEdit ? isEdit.data.motherLastName : "";
  let birthDate = isEdit ? isEdit.data.birthDate : "";
  let telephone = isEdit ? isEdit.data.telephone : "";
  let address = isEdit ? isEdit.data.address : "";
  let email = isEdit ? isEdit.data.email : "";
  let yunta = isEdit ? isEdit.data.yunta : "";
  let grade = isEdit ? isEdit.data.grade : "";
  let weapon = isEdit ? isEdit.data.weapon : "";
  let promo = isEdit ? isEdit.data.promo : "";

  const { value: valueDni, bind: bindDni, reset: resetDni } = useInput(dni);
  const { value: valueName, bind: bindName, reset: resetName } = useInput(name);
  const { value: valueFatherLastName, bind: bindFatherLastName, reset: resetFatherLastName } 
    = useInput(fatherLastName);
  const { value: valueMotherLastName, bind: bindMotherLastName, reset: resetMotherLastName } 
    = useInput(motherLastName);
  const { value: valueBirthDate, bind: bindBirthDate, reset: resetBirthDate } = useInput(birthDate);
  const { value: valueTelephone, bind: bindTelephone, reset: resetTelephone } = useInput(telephone);
  const { value: valueAddress, bind: bindAddress, reset: resetAddress } = useInput(address);
  const { value: valueEmail, bind: bindEmail, reset: resetEmail } = useInput(email);
  const { value: valueYunta, bind: bindYunta, reset: resetYunta } = useInput(yunta);
  const { value: valueGrade, bind: bindGrade, reset: resetGrade } = useInput(grade);
  const { value: valueWeapon, bind: bindWeapon, reset: resetWeapon } = useInput(weapon);
  const { value: valuePromo, bind: bindPromo, reset: resetPromo } = useInput(promo);

  const optionsGrade = [
    { value: "SBTTE", content: "SBTTE" },
    { value: "ALF", content: "ALF" }
  ]
  const optionsWeapon = [
    { value: "CAB", content: "CAB" },
    { value: "INF", content: "INF" },
    { value: "ART", content: "ART" },
    { value: "CGON", content: "CGON" },
    { value: "COM", content: "COM" },
    { value: "A AV", content: "A AV" },
    { value: "ING", content: "ING" }
  ]

  const handleReset = () => {
    resetDni();
    resetName();
    resetFatherLastName();
    resetMotherLastName();
    resetBirthDate();
    resetTelephone();
    resetAddress();
    resetEmail();
    resetYunta();
    resetGrade();
    resetWeapon();
    resetPromo();
  }
  const handleAdd = () => {
    const username = window.localStorage.getItem("username");
    let body = {
      dni: valueDni,
      name: valueName,
      fatherLastName: valueFatherLastName,
      motherLastName: valueMotherLastName,
      birthDate: valueBirthDate,
      telephone: valueTelephone,
      address: valueAddress,
      email: valueEmail,
      yunta: valueYunta,
      grade: valueGrade,
      weapon: valueWeapon,
      promo: valuePromo,
      createdBy: username,
      updatedBy: username,
    }
    console.log(colorFormText);
    let isValid = handleValidations(body, setColorFormText, colorFormReset);
    if(isValid){
      if(isEdit) {
        handleEdit("students/", body, id, handleReset, setIsEdit)
      } else {
        handleCreate("students/", body, handleReset);
      }
    }
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-4">
        <div className="card">
          <div className="card-header">
            <h3 align="center">{i18n.studentForm.formTitle}</h3>
          </div>
          <div className="card-body">
            <form className="">
              <FormInput
                labelContent={i18n.studentForm.formLabelDni} 
                formText={i18n.studentForm.formTextDni}
                color={colorFormText.dni}
                minLength="3"
                maxLength="10"
                bind={bindDni}
              ></FormInput>
              <FormInput
                labelContent={i18n.studentForm.formLabelName} 
                formText={i18n.studentForm.formTextName}
                color={colorFormText.name}
                minLength="3"
                maxLength="30"
                bind={bindName}
              ></FormInput>
              <FormInput
                labelContent={i18n.studentForm.formLabelFatherLastName} 
                formText={i18n.studentForm.formTextFatherLastName}
                color={colorFormText.fatherLastName}
                minLength="3"
                maxLength="30"
                bind={bindFatherLastName}
              ></FormInput>
              <FormInput
                labelContent={i18n.studentForm.formLabelMotherLastName}
                formText={i18n.studentForm.formTextMotherLastName}
                color={colorFormText.motherLastName}
                minLength="3"
                maxLength="30"
                bind={bindMotherLastName}
              ></FormInput>
              <FormInput
                labelContent={i18n.studentForm.formLabelBirthDate} 
                formText={i18n.studentForm.formTextBirthDate}
                color={colorFormText.birthDate}
                type="date"
                bind={bindBirthDate}
              ></FormInput>
              <FormInput
                labelContent={i18n.studentForm.formLabelTelephone}
                formText={i18n.studentForm.formTextTelephone}
                color={colorFormText.telephone}
                minLength="3"
                maxLength="30"
                bind={bindTelephone}
              ></FormInput>
              <FormInput
                labelContent={i18n.studentForm.formLabelAddress}
                formText={i18n.studentForm.formTextAddress}
                color={colorFormText.address}
                minLength="3"
                maxLength="60"
                bind={bindAddress}
              ></FormInput>
              <FormInput
                labelContent={i18n.studentForm.formLabelEmail}
                formText={i18n.studentForm.formTextEmail}
                color={colorFormText.email}
                minLength="3"
                maxLength="30"
                bind={bindEmail}
              ></FormInput>
              <FormInput
                labelContent={i18n.studentForm.formLabelYunta} 
                formText={i18n.studentForm.formTextYunta}
                color={colorFormText.yunta}
                minLength="3"
                maxLength="10"
                bind={bindYunta}
              ></FormInput>
              <FormDropDown
               labelContent={i18n.studentForm.formLabelGrade}
               formText={i18n.studentForm.formTextGrade}
               options={optionsGrade}
               color={colorFormText.grade}
               bind={bindGrade}
              ></FormDropDown>
              <FormDropDown
               labelContent={i18n.studentForm.formLabelWeapon}
               formText={i18n.studentForm.formTextWeapon}
               options={optionsWeapon}
               color={colorFormText.weapon}
               bind={bindWeapon}
              ></FormDropDown>
              <FormInput
                labelContent={i18n.studentForm.formLabelPromo}
                formText={i18n.studentForm.formTextPromo}
                color={colorFormText.promo}
                minLength="3"
                maxLength="10"
                bind={bindPromo}
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
