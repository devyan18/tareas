const element = document.getElementById('fk_state');
const fk_stateEdit = document.getElementById('fk_stateEdit');
const addEvent = document.getElementById("addTask").addEventListener("click", () => {
  getState(element)
});


const getState = async(element) => {
  let require = await fetch("http://localhost/tareas/api/states.php");
  let result = await require.json();
  element.innerHTML = "";
  result.states.map((res) => {
    element.innerHTML += `<option value="${res.id_state}">${res.description_state}</option>`;
  });
}
