const regex = /^[a-z ,.'-]+$/i;

validarNombreCompleto = (element, divError) => {
  if (element.value != "") {
    if (element.value.match(regex)) {
      errorComponent(divError, "okey")
      return true
    } else {
      errorComponent(divError, "invalido")
      return false
    }
  } else {
    errorComponent(divError, "vacio")
    return false
  }
}

validarDescription = (element, divError) => {
  if (element.value != "") {
    errorComponent(divError, "okey")
    return true
  } else {
    errorComponent(divError, "vacio")
    return false
  }
}