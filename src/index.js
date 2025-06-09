import "./reset.css"
import "./styles.css"

import { createTodo } from "./todoFactory"
import { createTodoList } from "./todoList"

const list = createTodoList()

const todo1 = createTodo("Learn JavaScript", "I need to learn javascript by making todo lists", null, "med")

list.add(todo1)

console.log(list.getAll())
