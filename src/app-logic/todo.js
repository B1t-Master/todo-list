import { compareAsc } from "date-fns";

function createTodo(
  title,
  description,
  deadline,
  status,
  priority,
  projectKey
) {
  // let status = false;
  const deleteTodo = () => {};

  const changeStatus = () => {
    return !status;
  };
  return { title, description, deadline, changeStatus, deleteTodo, priority };
}

function sortTodo() {}

export { createTodo };
