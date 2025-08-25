import { compareAsc } from "date-fns";
import { storageKey } from "./helper";
// function incrementID() {
//   return id++;
// }
function createTodo(
  title,
  description,
  deadline,
  status,
  priority,
  projectName,
  id = storageKey
) {
  // let status = false;
  const deleteTodo = () => {};

  const changeStatus = () => {
    return !status;
  };
  return {
    title,
    description,
    deadline,
    status,
    changeStatus,
    deleteTodo,
    priority,
    projectName,
    id,
  };
}

function sortTodo() {}

export { createTodo };
