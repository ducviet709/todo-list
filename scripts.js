let masterTodoList = []

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
  if (masterTodoList.length === 0 ) document.getElementById('todoList').innerHTML = ''
  let html = ''
  masterTodoList.map((todo, idx) => {
    const textnode = `<li>${masterTodoList[idx].body} <a href='#' onclick='removeTodoItem(${idx})'>x</a></li>`
    const node = html += textnode
    document.getElementById('todoList').innerHTML = node
  })
}

const removeTodoItem = selectedTodoIdx => {
  masterTodoList = masterTodoList.filter((_, idx) => idx !== selectedTodoIdx)
  renderTodoLists()
}

const onClickTitle = () => updateTitle()

const updateTitle = () => {
  document.getElementById('titleContainer').innerHTML = ''
  document.getElementById("titleContainer").innerHTML = `<input id="todoTitle"></input>`
  document.getElementById('todoTitle').focus()
}

const onButtonClick = () => {
  clearOldTodoLists()
  addTodoToList() 
  clearTodoInput()
  renderTodoLists()
}