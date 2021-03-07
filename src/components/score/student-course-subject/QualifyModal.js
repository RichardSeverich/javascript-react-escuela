import React, { useState } from "react";

import useInput from "./../../hooks/UseInput";
import FormInput from "./../../common/FormInput";
import i18n from "./../../../i18n/i18n";
import handleValidations from "./HandleValidations";
import { handleEdit, handleCreate } from "./../../handle/HandleManager";

const QualifyModal = (props) => {

  const colorFormReset = {
    score: ""
  }

  const [isEdit, setIsEdit] = useState(false);
  const [student] = useState(props.student);
  const [colorFormText, setColorFormText] = useState(colorFormReset);

  let scoreOld = props.data !== undefined ? props.data.subjectScore : "";

  let { value: valueScore, bind: bindScore, reset: resetScore } = useInput(scoreOld);

  const handleReset = () => {
    resetScore()
  };

  const handleAdd = () => {
    const username = window.localStorage.getItem("username");
    let body = {
      idSubject: props.data.idSubject,
      idStudent: student.id,
      score: valueScore,
      createdBy: username,
      updatedBy: username,
    }
    let isValid = handleValidations(body, setColorFormText, colorFormReset);
    if(isValid){
      if (props.data.id < 0) {
        handleCreate("subjects-students/", body, handleReset);
      } else {
        handleEdit("subjects-students/", body, props.data.id, handleReset, setIsEdit);
      }
      window.location.reload();
    }
  };

  return (
    <div 
      className="modal fade" 
      id="qualifyModal" 
      tabIndex="-1" 
      role="dialog" 
      aria-labelledby="qualifyModalLabel" 
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="qualifyModalLabel">{i18n.qualifyModal.ModalTitle}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div className="modal-body">
            <FormInput
              labelContent={i18n.qualifyModal.labelModal}
              formText={i18n.qualifyModal.textModal}
              color={colorFormText.score}
              minLength="1"
              maxLength="100"
              bind={bindScore}
            ></FormInput>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal"> {i18n.qualifyModal.ButtonClose} </button>
            <button type="button" className="btn btn-primary" onClick={handleAdd}>{i18n.qualifyModal.ButtonSave}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualifyModal;
