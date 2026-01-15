const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("todo-btn");
const taskList = document.querySelector(".task-list");
const emptyImg = document.querySelector(".empty-img");
const checkBtn = document.querySelector(".todo-checkbox");


function toggleImage () {
    if (taskList.children.length === 0) {
        emptyImg.classList.remove("empty");
    } else {
        emptyImg.classList.add("empty");

    }
}

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }  
    
    taskList.innerHTML += `
    <li class="task-item">
        <input type="checkbox" class="todo-checkbox">

        <span class="todo-text">
        ${taskText}
        </span>

        <div class="task-actions">
        <button class="dltBtn">
            <i class="fa-regular fa-trash-can"></i>
        </button>
        </div>
    </li>
    `;

    inputBox.value = "";
    toggleImage();
}

addBtn.addEventListener("click", addTask);

inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
})

document.addEventListener("click", (e) => {
  let btn;

  if (e.target.classList.contains("dltBtn")) {
    btn = e.target;
  } else if (e.target.parentElement.classList.contains("dltBtn")) {
    btn = e.target.parentElement;
  } else {
    return;
  }

  btn.parentElement.parentElement.remove();
  toggleImage();
});

document.addEventListener("change", (e) => {
    if (e.target.classList.contains("todo-checkbox")) {
        const li = e.target.parentElement;
        li.classList.toggle("completed", e.target.checked);
        function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
        }

        confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
        });
    }
})

toggleImage();
    