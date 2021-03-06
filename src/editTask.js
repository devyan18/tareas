const loadParamersEditForm = (element, id_state) => {
  const elemento = document.getElementById("fk_stateEdit")
  loadEditForm(element)
  loadSelectEdit(elemento, id_state)
  return element
}
const loadSelectEdit = async(elemento, id) => {
  let content = `http://localhost/tareas/api/states.php`;
  let require = await fetch(content)
  let result = await require.json()
  elemento.innerHTML = ""
  result.states.map(e => {
    if (e.id_state != id) {
      elemento.innerHTML += `<option value="${e.id_state}">${e.description_state}</option>`
    } else {
      elemento.innerHTML += `<option selected="true" value="${e.id_state}">${e.description_state}</option>`
    }
  })
}
const loadEditForm = async(id) => {
  let content = `http://localhost/tareas/api/?id=${id}`;
  let require = await fetch(content)
  let result = await require.json()
  let editFullNameBox = document.getElementById('fullNameEdit');
  let editDescriptionBox = document.getElementById('descriptionEdit');
  let hiddenUtilities = document.getElementById('hiddenUtilities');

  result.tasks.map(e => {
    hiddenUtilities.value = e.id_task
    console.log(hiddenUtilities.value)
    editFullNameBox.value = e.fullName
    editDescriptionBox.value = e.description
  })
}