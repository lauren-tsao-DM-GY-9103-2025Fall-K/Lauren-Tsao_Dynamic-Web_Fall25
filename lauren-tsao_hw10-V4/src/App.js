import React from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='main-font m-4'>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
