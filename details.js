let params = new URLSearchParams(window.location.search);
let taskId = params.get("id");

let savedTasks = localStorage.getItem("tasks");
let tasks = savedTasks ? JSON.parse(savedTasks) : [];

let currentTask = tasks.find(function(task) {
    return task.id == taskId;
});

document.getElementById("task-title").textContent = currentTask.text;
document.getElementById("description-input").value = currentTask.description;

let saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", function() {
    currentTask.description = document.getElementById("description-input").value;
    localStorage.setItem("tasks", JSON.stringify(tasks));
});