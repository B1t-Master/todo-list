import { createTodo } from "./todo";
// let i = 0;
function saveToStorage(item) {
  function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        storage &&
        storage.length !== 0
      );
    }
  }
  if (storageAvailable("localStorage")) {
    // storage.push(item);

    localStorage.setItem(item.key, JSON.stringify(item));
    // i++;
  } else {
    return;
  }
}
function addToProject(project, todo) {
  return project.todoList.push(todo);
}

function removeFromStorage(item, storage) {
  for (let i = 0; i < storage.length; i++) {
    if (storage[i] === item) storage.splice(i, 1);
    else return;
  }
}
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
let archive = [];
function getAllFromStorage() {
  for (var i = 1; i <= localStorage.length; i++) {
    archive[i] = getFromStorage(i);
  }
  return { archive };
}
function reassignMethods(item) {
  item.todoList.forEach((todo) => {
    Object.assign(todo, createTodo());
  });
  return item;
}
export {
  archive,
  addToProject,
  saveToStorage,
  removeFromStorage,
  getFromStorage,
  reassignMethods,
  getAllFromStorage,
};
