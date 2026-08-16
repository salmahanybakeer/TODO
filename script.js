//TOP-HEADER-----------------------------------------------------------------------------------------

let tasks = [];

function updateCounters() {
    let notStarted = 0;
    let inProgress = 0;
    let done = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === "not-started") {
            notStarted++;
        } else if (tasks[i].status === "in-progress") {
            inProgress++;
        } else if (tasks[i].status === "done") {
            done++;
        }
    }
    document.getElementById("not-started-count").textContent = notStarted + " NOT STARTED";
    document.getElementById("in-progress-count").textContent = inProgress + " IN PROGRESS";
    document.getElementById("done-count").textContent = done + " DONE";
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
});
