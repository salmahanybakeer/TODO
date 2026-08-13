//TOP-HEADER
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