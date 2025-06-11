import "@styles/main"
import "@js/projectController"

import { createTodo } from "@js/todoFactory"
import { createTodoList } from "@js/todoList"

const todo1 = createTodo("Learn JavaScript", "I need to learn javascript by making todo lists", null, "med")
const list = createTodoList()
list.add(todo1)

console.log(list.getAll())
