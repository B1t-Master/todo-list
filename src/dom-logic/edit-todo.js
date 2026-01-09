import { addTodo, resetForm } from "./add-task";
import { archive } from "../app-logic/helper";
import * as helpers from "../app-logic/helper";
import { createTodo } from "../app-logic/todo";
import selectProjects from "./select-project";
let editButton = document.querySelector(".dialog-add");
function reviveEditTodo() {
  editButton.removeEventListener("click", addTodo);

  editButton.addEventListener("click", editTodo);
}

function editTodo() {
  const modal = document.querySelector("#task-modal");
  const title = document.querySelector("#name");
  const date = document.querySelector("#dueDate");
  const projectName = document.querySelector("#number");
  const priority = document.querySelector("#priority");
  const description = document.querySelector("#description");

  let todoId = editButton.id;
  // console.log(title.value);
  console.log(editButton.id);
  let todo = createTodo(
    `${title.value}`,
    `${description.value}`,
    `${date.value}`,
    false,
    `${priority.value}`,
    `${projectName.value}`
  );

  let projectBody = document.querySelector(".project-body");
  projectBody.textContent = "";
  console.log(todo);
  helpers.archive[todoId] = todo;
  helpers.saveToStorage(helpers.archive);

  let project = document.querySelector(".project-name");
  if (project.textContent === "All Todos") {
    let storage = helpers.getAllFromStorage();
    helpers.updateView(storage);
  } else {
    // let storage = helpers.getAllFromStorage();
    // console.log(storage);

    // let tempArray = helpers.getProjectToDos(helpers.archive, projectName);
    // console.log(tempArray);
    // helpers.updateView(tempArray);

    selectProjects(document.querySelector(".project-name").textContent);
  }
  modal.close();
  resetForm();
}

function changeStatus() {
  let checkbox = document.querySelectorAll("checkbox");
  checkbox.addEventListener("click", (e) => {
    e.stopPropagation();

    archive[id].status = !archive[id].status;
  });
}

export { editTodo, reviveEditTodo };
