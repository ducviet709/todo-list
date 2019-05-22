let masterTodoList = []
masterTodoList = JSON.parse(localStorage.getItem("toDoList"));

const clearTodoInput = () => document.getElementById('userInput').value = ''
const clearOldTodoLists = () => document.getElementById('todoList').innerHTML = ''

const addTodoToList = () => {
  const newTodo = {
    isDone: false,
    createdAt: new Date(),
    body: document.getElementById('userInput').value
  }
  masterTodoList.push(newTodo)
}

const renderTodoLists = () => {
  if (masterTodoList.length === 0) document.getElementById('todoList').innerHTML = ''
  let html = '',
    node, textnode;
  masterTodoList.map((_, idx) => {
    if (masterTodoList[idx].isDone === false && checkBtn.checked == true) {
      textnode = `<li><a href='#' onclick='removeTodoItem(${idx})'><ion-icon name="remove-circle-outline"></ion-icon></a>
      ${masterTodoList[idx].body} <a href='#' onclick='toggleDone(${idx})'><ion-icon name="checkmark-circle-outline"></ion-icon></a></li>`
      node = html += textnode
      document.getElementById('todoList').innerHTML = node
    }
    if (masterTodoList[idx].isDone === true && checkBtn.checked == false) {
      textnode = `<li><a href='#' onclick='removeTodoItem(${idx})'><ion-icon name="remove-circle-outline"></ion-icon></a>
      ${masterTodoList[idx].body}<a href='#' onclick='toggleDone(${idx})'><ion-icon name="checkmark-circle"></ion-icon></a></li>`
      node = html += textnode.strike()
      document.getElementById('todoList').innerHTML = node
    } 
  })
  localStorage.setItem("toDoList", JSON.stringify(masterTodoList));
}

const removeTodoItem = selectedTodoIdx => {
  masterTodoList = masterTodoList.filter((_, idx) => idx !== selectedTodoIdx)
  renderTodoLists()
}

const toggleDone = selectedIsDoneIdx => {
  masterTodoList[selectedIsDoneIdx].isDone = !masterTodoList[selectedIsDoneIdx].isDone
  renderTodoLists()
}

const checkBtn = document.getElementById('checkbox')
checkBtn.addEventListener('change', renderTodoLists)

const onClickTitle = () => updateTitle()

document.getElementById('userInput').addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('addTodo-btn').click();
  }
})

const onButtonClick = () => {
  clearOldTodoLists()
  addTodoToList()
  clearTodoInput()
  renderTodoLists()
}


