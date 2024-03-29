const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodo();
    countTodo();
}

function checkTodo(event){
    const li = event.target.parentElement;
    const span = li.querySelector("span");
    span.classList.toggle("clear");
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const img = document.createElement("img");
    img.src = "img/cloud.png";
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const xButton = document.createElement("button");
    xButton.innerText = "❌";

    const checkButton = document.createElement("button");
    checkButton.innerText = "⭕";

    xButton.addEventListener("click", deleteTodo);
    checkButton.addEventListener("click", checkTodo);

    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(checkButton);
    li.appendChild(xButton);
    toDoList.appendChild(li);
    countTodo();
}

function countTodo(){
    const countDiv = document.querySelector("#todo-form div");
    // toDoForm 로 div에 들어갈 수 있는 방법 강의에서 찾아보기 분명 있었음
    countDiv.innerText = toDos.length;
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
    countTodo();
} 

// console.log(toDos.length);