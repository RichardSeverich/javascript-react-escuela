import { handleGet } from "./../components/handle/HandleManager";

const setArrayData = (data) =>{
  alert("Ejecutando Jacobitus Fido\nEsto podria demorar unos segundos");
}

const openJacobitosFido = () => {
  handleGet("cmd/", setArrayData);
};

export default openJacobitosFido;
