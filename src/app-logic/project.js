let key = 0;
function createProject(title) {
  ++key;
  let todoList = [];
  return { title, todoList, key };
}

export { createProject };
