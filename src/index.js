import { createTodo } from "./app-logic/todo";
import * as helpers from "./app-logic/helper";
import styles from "./style.css";
import renderTaskCard from "./dom-logic/task-card";
import { renderProjectCard } from "./dom-logic/project-card";

let todo1 = createTodo("me", "blabalbala", "today", true, "low", 1);
let todo2 = createTodo("you", "yadayadayaay", "tomorrow", true, "medium", 1);
let todo3 = createTodo("us", "yaayyy", "today", true, "high", 1);
let todo4 = createTodo("meyou", "waayyy", "today", false, "low", 1);
let todo5 = createTodo("whooo", "waayyy", "future", false, "low", 2);
// helpers.getAllFromStorage();

// console.log(todo1);
helpers.saveToStorage(todo1);
helpers.saveToStorage(todo2);
helpers.saveToStorage(todo3);
helpers.saveToStorage(todo4);
helpers.saveToStorage(todo5);

helpers.getAllFromStorage();
helpers.removeFromStorage("you", localStorage);
console.log(helpers.archive);
renderTaskCard(localStorage);
// console.log(helpers.getFromStorage("0").title);
// console.log("hello");
// helpers.archive.forEach(function (e) {
//   console.log(e.title);
// });
// helpers.getAllOfAKind("title");
renderProjectCard(localStorage);
// console.log(localStorage.key(1));
