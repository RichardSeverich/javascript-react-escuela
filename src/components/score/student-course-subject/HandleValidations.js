const handleValidations = (data, setColorFormText, colorFormReset) => {
  
  let isValid = true;
  const newColorFormText = colorFormReset;
  const dangerText = "danger";
  if(!(data.score>=1 && data.score<=100)){
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
