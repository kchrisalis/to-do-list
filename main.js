// TITLE
// Global Var
let els = {
  taskform: document.getElementById("taskForm"),
  tasklist: document.getElementById("allTasks"),
  tFBtn: document.getElementById("addTask"),
  tLBtn: document.getElementById("taskList"),
  taskBox: document.getElementById('showtask')
}

// Task Array
let toDo = initTasks();
let toDoBoxes = [];

function initTasks() {
  let storedTasksStr = localStorage.getItem("toDo");
  if (storedTasksStr) {
    return JSON.parse(storedTasksStr);
  } else {
    return [];
  }
}

// Event Listeners
document.getElementById("mainBlock").addEventListener("click", clickHandler);

// Main Function
function clickHandler() {
  if (event.target.id == "addTask") {
    // display div taskForm
    els.taskform.style.display = "block";
    els.tasklist.style.display = "none";
    els.tFBtn.classList.add("active");
    els.tLBtn.classList.remove("active");

  } else if (event.target.id == "taskList") {
    // display div allTasks
    els.taskform.style.display = "none";
    els.tasklist.style.display = "block";
    els.tFBtn.classList.remove("active");
    els.tLBtn.classList.add("active");

    els.taskBox.innerHTML = "";
    for (let i = 0; i < toDo.length; i++) {
      els.taskBox.append(taskAdd(toDo[i]));
    }

  } else if (event.target.id == "listAdd") {
    // add task to toDo list
    arraytoDo();
    document.getElementById("taskTitle").value = "";
    document.getElementById("difficulty").value = ""
    document.getElementById('taskStuff').value = "";

    // filtering tasks (use for loop to check divs in toDoBoxes array, use if statement to see if checkbox is checked?)
  } else if (event.target.value == "All") {
    els.taskBox.style.display = "block";

  } else if (event.target.value == "Finished") {
    // els.taskBox.style.display = "none";
    // display all checked boxes and hide all unchecked boxes

  } else if (event.target.value == "Ongoing") {
    // els.taskBox.style.display = "none";
    // display all unchecked boxes and hide all checked boxes
  }
}

// Helper Functions
// Push information into an array
function arraytoDo() {
  toDo.push({
    title: document.getElementById("taskTitle").value,
    difficulty: document.getElementById("difficulty").value,
    details: document.getElementById('taskStuff').value
  })

  localStorage.setItem("toDo", JSON.stringify(toDo));
}

// Create Task Boxes
function taskAdd(doStuff) {
  let ATT = {
    divEl: document.createElement('div'),
    check: document.createElement("input"),
    label: document.createElement("label"),
    pDifficulty: document.createElement("p"),
    pEl: document.createElement("p")
  }

  ATT.divEl.classList.add('taskCheck');

  ATT.check.type = "checkbox";
  ATT.divEl.append(ATT.check);

  ATT.label.innerHTML = `${doStuff.title}`;
  ATT.divEl.append(ATT.label);

  ATT.pDifficulty.innerHTML = `Difficulty: ${doStuff.difficulty}`
  ATT.divEl.append(ATT.pDifficulty);

  ATT.pEl.innerHTML = `${doStuff.details}`;
  ATT.divEl.append(ATT.pEl);

  return ATT.divEl;
}