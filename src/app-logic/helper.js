import renderTaskCard from "../dom-logic/task-card";
import { createTodo } from "./todo";
import { formatDistanceToNow } from "date-fns";
import { renderProjectCard } from "../dom-logic/project-card";
let archive = [];

// let storageKey = 0;
function convertToJSON(item, storageKey) {
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
    // console.log(localStorage.key(storageKey));
  } else {
    return;
  }
}

const saveToStorage = function (archive) {
  let storageKey = 0;
  // localStorage.clear;
  for (const index of archive) {
    // console.log(archive[index]);
    convertToJSON(index, storageKey);
    // index.id = storageKey;
    // console.log(index.id);
    storageKey++;
  }
};

function removeFromStorage(item, storage) {
  // const itemLength = item.length + 10;
  for (let i = 0; i <= storage.length; i++) {
    if (storage[i].title === item) {
      console.log(archive);
      storage.splice(i, 1);
      localStorage.clear();
      saveToStorage(storage);
      return;
    }

    // console.log(storage.getItem(i).slice(10, itemLength));
    // return
    // break;
  }
}

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getAllFromStorage() {
  // let archive = [];
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
function formatDate(date) {
  // let date1 = new Date();
  // if (date1 > date2) {
  //   return "expired";
  // }
  return `${formatDistanceToNow(date)} to go `;
}

function updateView(storage) {
  localStorage.setItem("visited", true);

  renderProjectCard(localStorage);
  renderTaskCard(storage);
}

function getProjectToDos(storage, project) {
  return storage.filter((todo) => {
    // console.log(project);
    return todo.projectName === project;
  });
}

let id = 3;
function generateID() {
  return id++;
}
//helper function to clear an element

// saveToStorage(archive);
let priority = ["low", "medium", "high"];

export {
  archive,
  priority,
  getAllOfAKind,
  formatDate,
  saveToStorage,
  removeFromStorage,
  getFromStorage,
  reassignMethods,
  getAllFromStorage,
  updateView,
  getProjectToDos,
  generateID,
};
