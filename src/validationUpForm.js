const fullNameBox = document.getElementById('fullName');
const descriptionBox = document.getElementById('description');
const fullNameErrorElement = document.getElementById('fullNameError');
const descriptionErrorElement = document.getElementById('descriptionError');
const btnAddTaskBtn = document.getElementById('btnAddTask');
const addFormValid = () => {
  activeBtnElement(btnAddTaskBtn, validarNombreCompleto(fullNameBox, fullNameErrorElement), validarDescription(descriptionBox, descriptionErrorElement), 1)
}

const fullNameValid = fullNameBox.addEventListener('keyup', addFormValid)
const descriptionValid = descriptionBox.addEventListener('keyup', addFormValid)