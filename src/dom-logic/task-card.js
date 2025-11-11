import {
  getAllFromStorage,
  archive,
  removeFromStorage,
} from "../app-logic/helper";
const Project = document.querySelector("#display");
export default function renderTaskCard(storage) {
  getAllFromStorage();
  let index = 0;
  while (index < archive.length) {
    // if ()
    let cardConatiner = document.createElement("div");
    let midlleContainer = document.createElement("div");
    let taskName = document.createElement("div");
    let dueDate = document.createElement("div");
    let priority = document.createElement("div");
    midlleContainer.classList.add("middle-container");
    taskName.textContent = `${archive[index].title}`;
    dueDate.textContent = `${archive[index].deadline}`;
    midlleContainer.appendChild(taskName);
    midlleContainer.appendChild(dueDate);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";

    deleteButton.addEventListener("click", () =>
      removeFromStorage(`${taskName.textContent}`, archive)
    );

    deleteButton.classList.add("delete-button");
    const status = document.createElement("input");
    status.type = "checkbox";
    status.checked = archive[index].status;
    priority.textContent = `${archive[index].priority}`;
    priority.classList.add(`${priority.textContent}`);
    priority.classList.add(`priority`);

    // status.name = "status";
    // status.textContent = `${archive[index].status}`;

    cardConatiner.appendChild(status);
    cardConatiner.appendChild(midlleContainer);
    cardConatiner.appendChild(priority);
    cardConatiner.classList.add("card-container");
    cardConatiner.appendChild(deleteButton);
    Project.appendChild(cardConatiner);
    addClasses(midlleContainer, cardConatiner);
    ++index;
  }
  return;
}

function addClasses(midlleContainer, cardConatiner) {
  console.log(midlleContainer);
  // let arr = [midlleContainer, cardConatiner];
  // console.log(arr);
  midlleContainer.classList.add("middle-container");
  cardConatiner.classList.add("card-container");
  // arr.map((elem) => {
  //   elem.classList.add(`${elem}` + "-container");
  // });
}
