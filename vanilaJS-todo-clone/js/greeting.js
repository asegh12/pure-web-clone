const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const mainPage = document.querySelector("#main-page");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden';

function clickSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    doGreeting();
}

function doGreeting(){
    greeting.innerHTML = "Hello " + localStorage.getItem(USERNAME_KEY) + "😆";
    mainPage.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', clickSubmit);
}else{
    doGreeting();
}