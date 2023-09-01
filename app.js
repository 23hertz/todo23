// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// event Listeners
todoButton.addEventListener('click',addTodo)

//functions
function addTodo(event)
{
    event.preventDefault()
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")

    const newTodo =document.createElement('li');
    newTodo.innerText = 'hello'
    newTodo.classList.add('todoItem');
    todoDiv.appendChild(newTodo)

    const completedButton =  document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton)

    const trashButton =  document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-trash"></i>'
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
}
