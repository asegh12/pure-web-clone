const todoButton = document.querySelector('#todo-bnt');
const todoList = document.querySelector('#todo-list');
const todoType = document.querySelector('#todo-list input');

const TODOS_KEY = 'todos';

let todos = [];

function showTodoList() {
    todoList.classList.toggle(HIDDEN_CLASSNAME);
    todoButton.classList.toggle(HIDDEN_CLASSNAME);
}

function deleteTodo(event) {
    const liRemove = event.target.parentElement;
    
    const getTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
    
    for(let i=0; i<getTodos.length; i++) {
        if(getTodos[i].id === parseInt(liRemove.id)) {
            getTodos.splice(i, 1);
            break;
        }
    }
    localStorage.setItem(TODOS_KEY, JSON.stringify(getTodos));
    todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    liRemove.remove();
    
}

function addTodo(event) {
    event.preventDefault();
    const todoObj = {
        "id": Date.now(), 
        "text": todoType.value
    };
    todos.push(todoObj);
    paintTodo(todoObj);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));

    todoType.value = '';
    
}

function paintTodo(todoObj) {
    const li = document.createElement('li');
    li.id = todoObj.id;
    const buttonOne = document.createElement('button');
    buttonOne.innerHTML = '⛔';
    buttonOne.addEventListener("click", deleteTodo);
    const span = document.createElement('span');
    span.innerHTML = todoObj.text;


    const buttonTwo = document.createElement('button');
    buttonTwo.innerHTML = '🙌';
    buttonTwo.addEventListener('click', event => {
        console.log(event.target.parentElement);
        event.target.parentElement.querySelector("span").classList.toggle("complete-todo");
    });

    li.appendChild(buttonTwo);
    li.appendChild(buttonOne);
    li.appendChild(span);
    todoList.appendChild(li);
}

todoButton.addEventListener('click', showTodoList);
todoList.querySelector('form').addEventListener('submit', addTodo);

if(localStorage.getItem(TODOS_KEY) !== null) {
    todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    todos.forEach(paintTodo);
}