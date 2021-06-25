const fkStateSelect = document.getElementById('fk_state');
btnAddTaskBtn.addEventListener('click', up = async() => {
  let cofe = `http://localhost/tareas/api/addtask.php?fullName=${fullNameBox.value}&description=${descriptionBox.value}&fk_state=${fkStateSelect.value}`
  let require = await fetch(cofe);
  let result = await require.json()
  loadBody()
})