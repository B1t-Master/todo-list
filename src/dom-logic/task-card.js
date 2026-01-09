import {
  getAllFromStorage,
  archive,
  removeFromStorage,
} from "../app-logic/helper";
import expandTodo from "./expand-todo";
import * as helpers from "../app-logic/helper";
import selectProjects from "./select-project";
import { editTodo } from "./edit-todo";

const project = document.querySelector(".project-body");

// let tempArray = helpers.getProjectToDos(archive, projectName);
export default function renderTaskCard(storage) {
  // storage = getAllFromStorage();
  project.textContent = "";
  let index = 0;
  while (index < storage.length) {
    // if ()
    let cardConatiner = document.createElement("div");
    let midlleContainer = document.createElement("div");
    let taskName = document.createElement("div");
    let dueDate = document.createElement("div");
    let priority = document.createElement("div");
    midlleContainer.classList.add("middle-container");
    taskName.textContent = `${storage[index].title}`;
    dueDate.textContent = `${helpers.formatDate(storage[index].deadline)}`;
    cardConatiner.id = `${index}`;
    taskName.id = `${index}`;
    taskName.classList.add("tn");
    midlleContainer.appendChild(taskName);
    midlleContainer.appendChild(dueDate);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.value = taskName.textContent;

    deleteButton.classList.add("delete-button");
    const status = document.createElement("input");
    status.type = "checkbox";
    status.checked = storage[index].status;
    priority.textContent = `${storage[index].priority}`;
    priority.classList.add(`${priority.textContent}`);
    priority.classList.add(`priority`);

    // status.name = "status";
    // status.textContent = `${archive[index].status}`;
    cardConatiner.classList.add(`${index}`);

    cardConatiner.appendChild(status);
    cardConatiner.appendChild(midlleContainer);
    cardConatiner.appendChild(priority);
    cardConatiner.classList.add("card-container");
    cardConatiner.appendChild(deleteButton);
    project.appendChild(cardConatiner);
    addClasses(midlleContainer, cardConatiner);
    ++index;
  }

  let deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      // if( )
      let projectName = document.querySelector(".project-name");
      removeFromStorage(`${deleteButton.value}`, archive);

      project.textContent = "";

      if (projectName.textContent === "All Todos") {
        storage = helpers.getAllFromStorage();
        helpers.updateView(storage);
      } else {
        // let projectName = document.querySelector(".project-name");
        // tempArray = helpers.getProjectToDos(helpers.archive, projectName);
        // console.log(tempArray);
        // helpers.updateView(tempArray);
        selectProjects(document.querySelector(".project-name").textContent);
      }
    });
  });
  expandTodo();
  // editTodo();
}

function addClasses(midlleContainer, cardConatiner) {
  // console.log(midlleContainer);
  // let arr = [midlleContainer, cardConatiner];
  // console.log(arr);
  midlleContainer.classList.add("middle-container");
  cardConatiner.classList.add("card-container");

  // arr.map((elem) => {
  //   elem.classList.add(`${elem}` + "-container");
  // });
}
