// migrate all code from V1 app.js to here
// then 'change' App function to Provider function

import {createContext, useState} from 'react'

const TodoContext = createContext()

const Provider = ({children}) => {
  const [todos, setTodos] = useState([])

  const createTodo = (title) => {
    const updatedTodos = [
      ...todos,
      {title, id: Math.round(Math.random() * 9999)},
    ]
    setTodos(updatedTodos)
  }

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, title: newTitle}
      }
      return todo
    })
    setTodos(updatedTodos)
  }


  return (
   <TodoContext.Provider
      value={{todos, createTodo, deleteTodoById, editTodoById}}
    >
      {children}
    </TodoContext.Provider>
  )
}

export {Provider}
export default TodoContext

// import this into use-todo-context.js to use across the project
