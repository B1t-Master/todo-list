import { compareAsc } from "date-fns";

function createTodo(title, description, deadline, status) {
  // let status = false;
  const deleteTodo = () => {};

  const changeStatus = (status) => {
    return !status;
  };
  return { title, description, deadline, changeStatus, deleteTodo };
}

function sortTodo() {}

export { createTodo };
