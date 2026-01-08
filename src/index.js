import { createTodo } from "./app-logic/todo";
import * as helpers from "./app-logic/helper";
import styles from "./style.css";
import renderTaskCard from "./dom-logic/task-card";
import { renderProjectCard } from "./dom-logic/project-card";
import { addButton } from "./dom-logic/add-task";
import firstLoad from "./dom-logic/first-load";

let todo1 = createTodo("me", "blabalbala", "today", true, "low", "Example");
let todo2 = createTodo(
  "you",
  "yadayadayaay",
  "tomorrow",
  true,
  "medium",
  "Example"
);
let todo3 = createTodo("Test", "yaayyy", "today", true, "high", "Test");
let todo4 = createTodo("meyou", "waayyy", "today", false, "low", 1);
let todo5 = createTodo("whooo", "waayyy", "future", false, "low", 2);
// helpers.getAllFromStorage();

// console.log(todo1);

// helpers.archive.push(todo1);
// helpers.archive.push(todo2);
// helpers.archive.push(todo3);

// helpers.saveToStorage(helpers.archive);

// helpers.removeFromStorage("you", localStorage);
// console.log(helpers.getFromStorage("0").title);
// console.log("hello");
// helpers.archive.forEach(function (e) {
//   console.log(e.title);
// });
// helpers.getAllOfAKind("title");
// console.log(localStorage.key(1));

// helpers.updateView(helpers.archive);
// helpers.getAllFromStorage();

// console.log(cardConatiner.innerHTML);

// helpers.archive= helpers.getAllFromStorage()
// helpers.updateView(helpers.getAllFromStorage());
console.log(helpers.archive);

firstLoad();

// firstLoad();
