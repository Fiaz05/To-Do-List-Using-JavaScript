document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement('li');

      // adding a div container
      const taskContainer = document.createElement('div');

      //adding a span for text
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      taskContainer.appendChild(taskSpan);

      //adding a little space before edit button
      const spaceBefore = document.createTextNode(' ');
      taskContainer.appendChild(spaceBefore);

      //creating edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-button');
      taskContainer.appendChild(editButton);

      //adding a little space after edit button
      const spaceAfter = document.createTextNode(' ');
      taskContainer.appendChild(spaceAfter);

      //creating delete button
      const delButton = document.createElement('button');
      delButton.textContent = 'Delete';
      delButton.classList.add('del-button');
      taskContainer.appendChild(delButton);

      taskItem.appendChild(taskContainer);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  });
  //Handle Edit & Delete Buttons
  taskList.addEventListener("click", event => {
    const clickedButton = event.target;
    taskContainer = clickedButton.parentElement;
    taskItem = taskContainer.parentElement;

    if (clickedButton.classList.contains("edit-button")) {
      taskSpan = taskContainer.querySelector('span');
      const newText = prompt("Edit Task:", taskSpan.textContent);
      if (newText !== "") {
        taskSpan.textContent = newText.trim();
      }
    }
    else if (clickedButton.classList.contains("del-button")) {
      taskList.removeChild(taskItem);
    }
  });
});