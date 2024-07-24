const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const USERNAME = "username";
function onLoginSubmit(event){
    event.preventDefault();
    const username= loginInput.value;
    loginForm.classList.add("hidden");
    paintGreetings(username);
    localStorage.setItem(USERNAME,username);

}


function paintGreetings(username){
    greeting.classList.remove("hidden");
    greeting.innerText ="Hello " + username;   
}

const savedUsername = localStorage.getItem(USERNAME);
if(savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUsername);

}
