// TITLE

// Task Array
let toDo = initTasks();

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

function clickHandler() {
  let taskform = document.getElementById("taskForm");
  let tasklist = document.getElementById("allTasks");
  let tFBtn = document.getElementById("addTask");
  let tLBtn = document.getElementById("taskList");

  if (event.target.id == "addTask") {
    // display div taskForm
    taskform.style.display = "block";
    tasklist.style.display = "none";
    tFBtn.classList.add("active");
    tLBtn.classList.remove("active");


  } else if (event.target.id == "taskList") {
    // display div allTracks
    taskform.style.display = "none";
    tasklist.style.display = "block";
    tFBtn.classList.remove("active");
    tLBtn.classList.add("active");

  } else if (event.target.id == "listAdd") {
    // add task to toDo list
    arraytoDo();
    document.getElementById("taskTitle").value = "";
    document.getElementById("difficulty").value = ""
    document.getElementById('taskStuff').value = "";
  }
}


// Helper Functions
function arraytoDo() {
  toDo.push({
    title: document.getElementById("taskTitle").value,
    difficulty: document.getElementById("difficulty").value,
    details: document.getElementById('taskStuff').value
  })

  localStorage.setItem("toDo", JSON.stringify(toDo));

  let taskBox = document.getElementById('showtask');

  taskBox.innerHTML = ""
  for (let i = 0; i < toDo.length; i++) {
    taskBox.append(taskAdd(toDo[i]));
  }
}

function taskAdd(doStuff) {
  let divEl = document.createElement('div');
  divEl.classList.add('taskCheck');

  let check = document.createElement("input");
  check.type = "checkbox";
  divEl.append(check);

  let label = document.createElement("label");
  label.innerHTML = `${doStuff.title}`;
  divEl.append(label);

  let pDifficulty = document.createElement("p")
  pDifficulty.innerHTML = `Difficulty: ${doStuff.difficulty}`
  divEl.append(pDifficulty);

  let pEl = document.createElement("p");
  pEl.innerHTML = `${doStuff.details}`;
  divEl.append(pEl);

  return divEl;
}