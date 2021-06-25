const tbody = document.getElementById("tbody");
const objStyleOptions = {
  edit: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"></path></svg>`,
  delete: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-x-fill" viewBox="0 0 16 16"><path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM6.854 8.146 8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 1 1 .708-.708z"></path></svg>`
}
const loadBody = async() => {
  let require = await fetch("http://localhost/tareas/api");
  let result = await require.json();

  tbody.innerHTML = "";
  let array = ["", "Completado", "En Proceso", "Pendiente"];
  let classArray = ["", "success", "warning", "danger"];
  result.tasks.map((e) => {
    let idEditBtn = "btnEditTaskss" + e.id_task;
    let idDeleteBtn = "btnDeleteTaskss" + e.id_task;
    tbody.innerHTML += `<tr>
    <td>${e.fullName}</td>
            <td>${e.description}</td>
            <td><button class="btn btn-${classArray[e.fk_state]}">${array[e.fk_state]}</button></td>
            <td><button id="${idEditBtn}" data-bs-toggle="modal" data-bs-target="#editModal" onClick="loadParamersEditForm(${e.id_task}, ${e.fk_state})" type="button" class="btn btn-success">${objStyleOptions.edit}</button>
            <button id="${idDeleteBtn}" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick="loadParamersEditForm(${e.id_task}, ${e.fk_state})"type="button" class="btn btn-danger">${objStyleOptions.delete}</button></td>
        </tr>`;
  });
};

loadBody();