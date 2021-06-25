const objMsjAlerts = {
  okey: "",
  vacio: "Este campo no puede estar vacio.",
  invalido: "Este campo contiene caracteres invalidos",
}
const objStyleAlerts = {
  okey: "",
  vacio: "alert alert-danger",
  invalido: "alert alert-warning"
}

const errorComponent = (element, stateElement) => {
  element.innerText = objMsjAlerts[stateElement];
  element.className = objStyleAlerts[stateElement];
}