const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add Task
function addTask() {
  const task = inputBox.value.trim();
  if (task === '') {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  // Delete Button
  const span = document.createElement("span");
  span.innerHTML = "&#10006;";
  span.classList.add("delete-btn");
  li.appendChild(span);

  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
}

// Mark Complete / Delete Task
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");  // mark complete
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();       // delete task
    saveData();
  }
}, false);

// Save to LocalStorage
function saveData() {
  localStorage.setItem("todoList", listContainer.innerHTML);
}

// Load saved data
function showTask() {
  listContainer.innerHTML = localStorage.getItem("todoList");
}

showTask();
