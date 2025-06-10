import "./reset.css"
import "./styles.css"

import { createTodo } from "./todoFactory"
import { createTodoList } from "./todoList"
import "./projectController"

const todo1 = createTodo("Learn JavaScript", "I need to learn javascript by making todo lists", null, "med")
const list = createTodoList()
list.add(todo1)

console.log(list.getAll())
