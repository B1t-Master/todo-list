import { createTodo } from "./todo";
let storageKey = 0;
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

    localStorage.setItem(`${storageKey}`, JSON.stringify(item));
    storageKey++;
  } else {
    return;
  }
}
function addToProject(project, todo) {
  return project.todoList.push(todo);
}

function removeFromStorage(item, storage) {}
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// let archive = [];
function getAllFromStorage() {
  for (var i = 0; i < localStorage.length; i++) {
    console.log(getFromStorage(i));
  }
  // return { archive };
}
function reassignMethods(item) {
  item.todoList.forEach((todo) => {
    Object.assign(todo, createTodo());
  });
  return item;
}
export {
  addToProject,
  saveToStorage,
  removeFromStorage,
  getFromStorage,
  reassignMethods,
  getAllFromStorage,
};
