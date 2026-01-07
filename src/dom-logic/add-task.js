import { createTodo } from "../app-logic/todo";
import { renderProjectCard } from "../dom-logic/project-card";
import renderTaskCard from "./task-card";
import * as helpers from "../app-logic/helper";

const addButton = document.querySelector(".add-task");
const modal = document.querySelector("#task-modal");
const closeButton = document.querySelector(".close");
const title = document.querySelector(".task-title");
const date = document.querySelector(".date");
const projectNumber = document.querySelector(".project-number");
const priority = document.querySelector(".priority");

// const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     audio.play();
//   });
// });

const createTaskButton = document.querySelector(".dialog-add");

addButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

createTaskButton.addEventListener("click", () => {
  let todo = createTodo(
    `${title.value}`,
    "test",
    `${helpers.formatDate(date.value)}`,
    false,
    `${priority.value}`,
    `${projectNumber.value}`
  );
  title.value = "";
  date.value = "";
  projectNumber.value = "";
  priority.value = "";
  let projectBody = document.querySelector(".project-body");
  projectBody.textContent = "";
  helpers.archive.push(todo);
  helpers.saveToStorage(helpers.archive);

  let storage = helpers.getAllFromStorage();

  helpers.updateView(storage);
  modal.close();

  // console.log(projectNumber);
});

export { addButton };
