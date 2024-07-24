const toDoForm = document.getElementById("todo-form");
const toDoInput= toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const todos =[];


function deletetodo(event){
    const li = event.target.parentElement;
    li.remove();

}

function saveTodo(){
    localStorage.setItem("todo",JSON.stringify(todos));
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText= newTodo;

    const button = document.createElement("button");
    button.innerText="🔥";
    button.addEventListener("click",deletetodo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
 


}


function handletodosubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodo();

}
toDoForm.addEventListener("submit", handletodosubmit); 