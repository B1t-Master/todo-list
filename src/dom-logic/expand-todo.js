import * as helpers from "../app-logic/helper";
import { addTodo } from "./add-task";

export default function expandTodo() {
  let allTodos = document.querySelectorAll(".card-container");
  const modal = document.querySelector("#task-modal");

  allTodos.forEach((todo) => {
    todo.addEventListener("click", () => {
      let title = document.querySelector("#name");
      let projectName = document.querySelector("#number");
      let description = document.querySelector("#description");
      let dueDate = document.querySelector("#dueDate");
      let priority = document.querySelector("#priority");
      let editButton = document.querySelector(".dialog-add");
      let id = todo.id;
      console.log(helpers.archive[id]);

      title.value = helpers.archive[id].title;
      projectName.value = helpers.archive[id].projectName;
      description.textContent = helpers.archive[id].description;
      dueDate.value = helpers.archive[id].deadline;
      //   console.log(todo.deadline);
      priority.value = helpers.archive[id].priority;

      editButton.textContent = "EDIT";
      editButton.classList.remove("blue");

      editButton.classList.add("orange");

      //   editButton.removeEventListener("click", addTodo);
      //   editButton.addEventListener("click", () => {});

      modal.showModal();
    });
  });
}
