const deleteBtn = document.getElementById('btnDeleteTask').addEventListener('click', () => {
  let hiddenUtilitiesElement = document.getElementById('hiddenUtilities').value
  console.log(hiddenUtilitiesElement)
  deleteAsync(hiddenUtilitiesElement)
  loadBody()
})

const deleteAsync = async(id) => {
  let data = `http://localhost/tareas/api/delete.php/?id_task=${id}`
  let request = await fetch(data)
  let algo = await request.json()
  console.log(algo)
}