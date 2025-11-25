const addButton = document.querySelector(".add-task");
const modal = document.querySelector("#task-modal");
const closeButton = document.querySelector(".close");
addButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});
export { addButton };
