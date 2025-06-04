function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item";

  const label = document.createElement("label");
  label.style.display = "flex";
  label.style.alignItems = "center";
  label.style.gap = "10px";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input";
  checkbox.onchange = () => {
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  };

  const span = document.createElement("span");
  span.textContent = taskText;

  label.appendChild(checkbox);
  label.appendChild(span);

  const btn = document.createElement("button");
  btn.innerHTML = "❌";
  btn.className = "remove-btn";
  btn.onclick = () => li.remove();

  li.appendChild(label);
  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
