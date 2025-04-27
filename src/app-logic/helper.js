let i = 0;
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
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  if (storageAvailable("localStorage")) {
    // storage.push(item);

    localStorage.setItem(i, JSON.stringify(item));
    i++;
  } else {
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
function getFromStorage(item) {
  return localStorage.getItem(JSON.parse(item));
}

export { addToProject, saveToStorage, removeFromStorage, getFromStorage };
