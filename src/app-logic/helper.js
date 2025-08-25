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
    // console.log(localStorage.key(storageKey));
  } else {
    return;
  }
}
// function addToProject(project, todo) {
//   return project.todoList.push(todo);
// }

function removeFromStorage(item, storage) {
  const itemLength = item.length + 10;
  for (let i = 0; i <= storage.length; i++) {
    // console.log(storage.getItem(i).slice(10, itemLength));
    if (storage.getItem(i).slice(10, itemLength) === item) {
      storage.removeItem(i);
    }
    getAllFromStorage();
    // return
    // break;
  }
}
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
let archive = [];
function getAllFromStorage() {
  archive = [];
  for (let i = 0; i <= localStorage.length; i++) {
    if (getFromStorage(i)) archive[i] = getFromStorage(i);
  }
  archive = archive.filter((e) => e);
  return archive;
}
function reassignMethods(item) {
  item.todoList.forEach((todo) => {
    Object.assign(todo, createTodo());
  });
  return item;
}

function getAllOfAKind(key) {
  getAllFromStorage();
  archive.forEach(function (object) {
    return object[key];
  });
}

let priority = ["low", "medium", "high"];

export {
  archive,
  storageKey,
  priority,
  getAllOfAKind,
  // addToProject,
  saveToStorage,
  removeFromStorage,
  getFromStorage,
  reassignMethods,
  getAllFromStorage,
};
