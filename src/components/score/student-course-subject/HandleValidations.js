const handleValidations = (data, setColorFormText, colorFormReset) => {
  
  let isValid = true;
  const newColorFormText = colorFormReset;
  const dangerText = "danger";
  if(!(data.score.length>=1 && data.score.length<=100)){
    isValid = false;
    newColorFormText.score = dangerText;
  } if(!/^[0-9]+$/.test(data.score)){
    isValid = false;
    newColorFormText.score = dangerText;
  }
  setColorFormText(newColorFormText);
  return isValid;
};

export default handleValidations;
