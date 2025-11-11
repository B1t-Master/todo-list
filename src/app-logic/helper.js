let archive = [];
import { createTodo } from "./todo";
let storageKey = 0;
function convertToJSON(item) {
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

const saveToStorage = function (archive) {
  for (const index of archive) {
    // console.log(archive[index]);
    convertToJSON(index);
  }
};

function removeFromStorage(item, storage) {
  // const itemLength = item.length + 10;
  for (let i = 0; i <= storage.length; i++) {
    for (const key in storage[i]) {
      if (storage[i][key] === item) {
        storage = storage.splice(i, 1);
        console.log(archive);
        localStorage.clear();
        saveToStorage(archive);
        return;
      }
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
  // archive = [];
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
