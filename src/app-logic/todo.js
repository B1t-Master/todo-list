import { compareAsc } from "date-fns";

function createTodo(title, description, deadline, status, priority) {
  // let status = false;
  const deleteTodo = () => {};

  const changeStatus = (status) => {
    return !status;
  };
  return { title, description, deadline, changeStatus, deleteTodo, priority };
}

function sortTodo() {}

export { createTodo };
