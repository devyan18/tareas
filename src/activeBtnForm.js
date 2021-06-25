const activeBtnElement = (element, fullName, description, diff) => {
  if (fullName && description && diff == 1) {
    element.removeAttribute("disabled")
  } else {
    element.setAttribute("disabled", true)
  }
}