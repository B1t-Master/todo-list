import { createTodo } from "./app-logic/todo";
import { createProject } from "./app-logic/project";
import {
  addToProject,
  removeFromStorage,
  saveToStorage,
} from "./app-logic/helper";

let project1 = createProject("youdo");
let todo1 = createTodo("me", "blabalbala", "today", true);
let todo2 = createTodo("you", "yadayadayaay", "tomorrow", true);
// project1.todoList.push(createTodo());
// addToProject(project1, todo1);
// addToProject(project1, todo2);
// saveToStorage(project1);
// saveToStorage(todo1);
// console.log(JSON.parse(localStorage.getItem(0)));

console.log(project1);
// removeFromStorage(todo1, project1.todoList);

console.log("to dodddddd");
//how do i store functions into local storage
