const btnEditTaskEvent = document.getElementById('btnEditTask').addEventListener('click', editFinishUp)
const editFullNameBoxEvent = document.getElementById('fullNameEdit')
const editDescriptionBoxEvent = document.getElementById('descriptionEdit')
const alertEditFullNameElement = document.getElementById('alertEditFullName')
const alerEditDescriptionElement = document.getElementById('alerEditDescription')
const btnEditTaskElement = document.getElementById('btnEditTask')
const editFormValid = () => {
  activeBtnElement(btnEditTaskElement, validarNombreCompleto(editFullNameBoxEvent, alertEditFullNameElement), validarDescription(editDescriptionBoxEvent, alerEditDescriptionElement), 1)
}
editFullNameBoxEvent.addEventListener('keyup', editFormValid)
editDescriptionBoxEvent.addEventListener('keyup', editFormValid)

function editFinishUp() {
  console.log(loadParamersEditForm)
}