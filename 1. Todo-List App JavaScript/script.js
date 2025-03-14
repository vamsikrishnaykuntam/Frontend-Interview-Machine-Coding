document.addEventListener("DOMContentLoaded", function () {
  todoForm = document.querySelector(".todo-form");
  todoInput = document.querySelector(".todo-input");
  todoSubmit = document.querySelector(".todo-submit");
  todoList = document.querySelector(".todo-list");
  let editMode = false;
  let editValue = null;

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    todoText = todoInput.value.trim();
    if (todoText !== "") {
      if (editMode) {
        editValue.firstChild.textContent = todoText;
        todoSubmit.innerText = "Add Todo";
        editMode = false;
        editValue = null;
        todoInput.value = "";
      } else {
        addTodoItem(todoText);
        todoInput.value = "";
      }
    } else {
      alert("Enter a valid task");
    }
  });
  todoList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.innerText === "❌") {
        todoItem.remove();
      } else if (target.innerText === "✏️") {
        editMode = true;
        editValue = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
    }
  });
  function addTodoItem(todoText) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    todoItem.innerHTML = `<span> ${todoText} </span>`;
    editButton.innerText = "✏️";
    deleteButton.innerText = "❌";

    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  }
});
