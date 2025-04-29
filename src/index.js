import { createTodo } from "./app-logic/todo";
import { createProject } from "./app-logic/project";
import * as helpers from "./app-logic/helper";

let project1 = createProject("youdo");
let project2 = createProject("medo");
let todo1 = createTodo("me", "blabalbala", "today", true);
let todo2 = createTodo("you", "yadayadayaay", "tomorrow", true);
// project1.todoList.push(createTodo());
// addToProject(project1, todo1);
// addToProject(project1, todo2);
helpers.saveToStorage(project1);
helpers.saveToStorage(project2);

helpers.getAllFromStorage();
console.log(helpers.archive);

console.log(project1);
console.log(project2);
// removeFromStorage(todo1, project1.todoList);

console.log("to dodddddd0");
