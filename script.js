//TOP-HEADER-----------------------------------------------------------------------------------------

let tasks = [];
let doneCount = 0;

function updateCounters() {
    let notStarted = 0;
    let inProgress = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === "not-started") {
            notStarted++;
        } else if (tasks[i].status === "in-progress") {
            inProgress++;
        }
    }
    document.getElementById("not-started-count").textContent = notStarted + " NOT STARTED";
    document.getElementById("in-progress-count").textContent = inProgress + " IN PROGRESS";
    document.getElementById("done-count").textContent = doneCount + " DONE";
}
updateCounters();

//ADD-BUTTON---------------------------------------------------------------------------------------

let inputElement = document.getElementById("input-task");
let addButton = document.getElementById("add-button");

addButton.addEventListener("click", function() {
    let taskText = inputElement.value.trim();
    if (taskText === "") {
        return;
    }
    let newTask = { text: taskText, status: "not-started" };
    tasks.push(newTask);
    inputElement.value = "";
    updateCounters();
    renderTasks();
});
//ADDED-TASKS-------------------------------------------------------------------------------------------

let taskList = document.getElementById("task-list");

function renderTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let li = document.createElement("li");

        let notStartedBtn = document.createElement("button");
        notStartedBtn.textContent = "Not Started";
        if (task.status === "not-started") {
            notStartedBtn.classList.add("active");
        }
        notStartedBtn.addEventListener("click", function() {
            task.status = "not-started";
            renderTasks();
            updateCounters();
        });

        let inProgressBtn = document.createElement("button");
        inProgressBtn.textContent = "In Progress";
        if (task.status === "in-progress") {
            inProgressBtn.classList.add("active");
        }
        inProgressBtn.addEventListener("click", function() {
            task.status = "in-progress";
            renderTasks();
            updateCounters();
        });

        let doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";

        doneBtn.addEventListener("click", function() {
            doneCount++;
            tasks.splice(i, 1);
            renderTasks();
            updateCounters();
        });

        let span = document.createElement("span");
        span.textContent = task.text;


        li.appendChild(span);
        li.appendChild(notStartedBtn);
        li.appendChild(inProgressBtn);
        li.appendChild(doneBtn);

        taskList.appendChild(li);
    }
}