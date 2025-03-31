document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTaskDescription = document.getElementById("new-task-description").value;
    if (newTaskDescription.trim() === "") return; // Prevent empty tasks

    const newTask = document.createElement("li");
    newTask.textContent = newTaskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    document.getElementById("new-task-description").value = ""; // Clear input field
  });
});
