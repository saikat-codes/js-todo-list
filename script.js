const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("todo-btn");
const taskList = document.querySelector(".task-list");
const emptyImg = document.querySelector(".empty-img");

function toggleImage () {
    if (taskList.children.length === 0) {
        emptyImg.classList.add("empty");
    } else {
        emptyImg.classList.remove("empty");
    }
}

function addTask() {
    const taskText = inputBox.value.trim();
    inputBox.preventDefault();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }   
}

addBtn.addEventListener("click",addTask);


const list = document.createElement("li");
list.innerText = taskText;