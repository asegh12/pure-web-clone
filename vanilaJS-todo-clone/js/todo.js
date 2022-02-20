const todoForm = document.querySelector('#todo-form');
const todoText = todoForm.querySelector('input');
const todoFormBtn = todoForm.querySelector('button');

const TODO_MAIN_TEXT = "todomain";
const DECORATION_CLASSNAME = "complete-todo"

function todoSubmit(event) {
    event.preventDefault();
    localStorage.setItem(TODO_MAIN_TEXT, todoText.value);
    greetingTodoMain();
}

function greetingTodoMain() {
    todoForm.querySelector('input').classList.add(HIDDEN_CLASSNAME);
    const todoMainText = document.querySelector('#todo-form-text');
    todoMainText.classList.remove(HIDDEN_CLASSNAME);
    todoFormBtn.classList.remove(HIDDEN_CLASSNAME);
    todoMainText.innerHTML = localStorage.getItem(TODO_MAIN_TEXT);
    todoFormBtn.addEventListener("click", event => {
        event.preventDefault();
        const textLine = event.target.parentElement.querySelector("#todo-form-text");
        textLine.classList.toggle(DECORATION_CLASSNAME);
    });
    
}

if(localStorage.getItem(TODO_MAIN_TEXT) === null) {
    todoForm.addEventListener("submit", todoSubmit);
} else {
    greetingTodoMain()
}