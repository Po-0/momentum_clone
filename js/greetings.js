const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIIDDEN_CLASSNAME);
    painGreetings(username);
}

function painGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername===null) { 
    loginForm.classList.remove(HIIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onSubmit);
} else {
    painGreetings(savedUsername);
}