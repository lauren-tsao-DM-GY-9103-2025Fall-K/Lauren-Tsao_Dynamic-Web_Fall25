import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import Button from './Button'

const TodoCreate = () => {
  const {createTodo} = useTodoContext()
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='border-2 border-dotted border-black rounded-full mr-2 py-2 px-4' type="text" onChange={handleChange} value={title} />
      <Button>Create Todo</Button>
    </form>
  )
}

export default TodoCreate
