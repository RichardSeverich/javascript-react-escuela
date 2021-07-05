import React, { useState } from "react";
import i18n from "../../../../i18n/i18n";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import "./Table.css";
import certificado from "./certificado.jpg";


const CertificatePdf = (props) => {
  const [student] = useState(props.student);
  const [course] = useState(props.course);
  const [arrayData] = useState(props.arrayData);
  const handleClick = () => {
    let bool = true;
    arrayData.forEach(element => {
      (parseInt(element.subjectScore) < 80)? bool = false : bool=true;
    });
    (bool)? createPdf(student, course) : alert
    (("No se puede generar certificado, porque este estudiante no aprobo") +
    (" todas las materias con la nota minima de '80'"))
  };
  console.log(arrayData)
  return (
    <button id="pdf-button" className="btn btn-primary" onClick={handleClick}>
      {i18n.userTable.tableCertificateButtonPdf}
    </button>
  );
};

export default CertificatePdf;

const createPdf = (student, course)=>{
  const courseName = course.courseName.toUpperCase();
  const doc = new jsPDF('landscape');
  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();
  doc.addImage(certificado, 'JPEG', 0, 0, width, height);

  doc.addFont("Times-Roman", "name", "Oblique");
  doc.setFont('name');
  doc.setFontSize(22);
  doc.text(75,93,`${student.grade}. ${student.name} ${student.fatherLastName} ${student.motherLastName}`.toUpperCase());

  doc.addFont("Times-Roman", "courseName", "bold");
  doc.setFont('courseName');
  doc.setFontSize(38);
  doc.text(100,120,`“ ${courseName}”`);

  doc.setFontSize(11);
  doc.text(58,129.5,`${dateConvert(course.courseStartDate)}`);
  doc.text(85,129.5,`${dateConvert(course.courseFinishDate)}`);
  doc.text(237,144.5,`${dateFormat(course.courseFinishDate)}`);

  doc.save('certificado.pdf');
};

const dateConvert = (dateFirst)=>{
  const date = new Date(dateFirst.replace('-', '/'));
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const dateFinal = date.
      toLocaleDateString("es-ES", options).
      replace(/ /g, "-").
      toUpperCase();
  return dateFinal;
}

const dateFormat = (dateFirst)=>{
  const date = new Date(dateFirst.replace('-', '/'));
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  var list = date.toLocaleDateString("es-ES", options).split(" ")
  return `${list[2]} ${list[0]} del ${list[4]}`
}