import { createTodo } from "../app-logic/todo";
import { renderProjectCard } from "../dom-logic/project-card";
import renderTaskCard from "./task-card";
import * as helpers from "../app-logic/helper";

import { editTodo } from "./edit-todo";

const addButton = document.querySelector(".add-task");
let createButton = document.querySelector(".dialog-add");

const modal = document.querySelector("#task-modal");
const closeButton = document.querySelector(".close");
const title = document.querySelector("#name");
const date = document.querySelector("#dueDate");
const projectNumber = document.querySelector("#number");
const priority = document.querySelector("#priority");
const description = document.querySelector("#description");

// const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     audio.play();
//   });
// });

const createTaskButton = document.querySelector(".dialog-add");

addButton.addEventListener("click", () => {
  editButton.removeEventListener("click", editTodo);

  editButton.addEventListener("click", addTodo);
  modal.showModal();
});

closeButton.addEventListener("click", (e) => {
  title.value = "";
  date.value = "";
  projectNumber.value = "";
  priority.value = "";
  description.textContent = "";
  modal.close();
  createTaskButton.classList.add("blue");
  createTaskButton.classList.remove("orange");

  createTaskButton.textContent = "Create";
  // e.preventDefault();
});

createTaskButton.addEventListener("click", addTodo);

function addTodo() {
  let todo = createTodo(
    `${title.value}`,
    `${description.value}`,
    `${date.value}`,
    false,
    `${priority.value}`,
    `${projectNumber.value}`,
    `${0}`
  );

  let projectBody = document.querySelector(".project-body");
  projectBody.textContent = "";

  helpers.archive.push(todo);
  helpers.saveToStorage(helpers.archive);

  let projectName = document.querySelector(".project-name");
  if (projectName.textContent === "All Todos") {
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
  // console.log(projectNumber);
}

function resetForm() {
  modal.close();
  title.value = "";
  date.value = "";
  projectNumber.value = "";
  priority.value = "";
  description.textContent = "";
}

export { addButton, addTodo, resetForm };
