import { createTodo } from "./app-logic/todo";
import * as helpers from "./app-logic/helper";
import styles from "./style.css";

let todo1 = createTodo("me", "blabalbala", "today", true, "important", 1);
let todo2 = createTodo(
  "you",
  "yadayadayaay",
  "tomorrow",
  true,
  "not important",
  1
);
// helpers.getAllFromStorage();

// console.log(todo1);
// helpers.saveToStorage(todo1);
// helpers.saveToStorage(todo2);
helpers.getAllFromStorage();
