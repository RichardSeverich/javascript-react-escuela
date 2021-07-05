const handleValidations = (data, setColorFormText, colorFormReset) => {
  
  let isValid = true;
  const newColorFormText = colorFormReset;
  const dangerText = "danger";
  if(!(data.name.length>=3 && data.name.length<=120)){
    isValid = false;
    newColorFormText.name = dangerText;
  } if(!(data.startDate.length===10)){
    isValid = false;
    newColorFormText.startDate = dangerText;
  } if(!(data.finishDate.length===10)){
    isValid = false;
    newColorFormText.finishDate = dangerText;
  }
  setColorFormText(newColorFormText);
  return isValid;
};

export default handleValidations;
