const btnEditTaskEvent = document.getElementById('btnEditTask')
const editFullNameBoxEvent = document.getElementById('fullNameEdit')
const editDescriptionBoxEvent = document.getElementById('descriptionEdit')
const alertEditFullNameElement = document.getElementById('alertEditFullName')
const alerEditDescriptionElement = document.getElementById('alerEditDescription')
const editFormValid = () => {
  activeBtnElement(btnEditTaskEvent, validarNombreCompleto(editFullNameBoxEvent, alertEditFullNameElement), validarDescription(editDescriptionBoxEvent, alerEditDescriptionElement), 1)
}
editFullNameBoxEvent.addEventListener('keyup', editFormValid)
editDescriptionBoxEvent.addEventListener('keyup', editFormValid)

const editFinishUp = async() => {
  let id_task = await document.getElementById('hiddenUtilities').value
  let fullName = await editFullNameBoxEvent.value
  let description = await editDescriptionBoxEvent.value
  let fk_state = await document.getElementById('fk_stateEdit').value;
  let require = `http://localhost/tareas/api/edit.php/?id_task=${id_task}&fullName=${fullName}&description=${description}&fk_state=${fk_state}`
  let request = await fetch(require)
  loadBody()
}
btnEditTaskEvent.addEventListener('click', editFinishUp)