import {useState} from 'react'
import Button from './Button'

// props = todo, onSubmit
const TodoEdit = ({todo, onSubmit}) => {
  const [title, setTitle] = useState(todo.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(todo.id, title)
  }
  return (
    <div>
      <form className='w-80 flex m-4 p-2 justify-between'onSubmit={handleSubmit}>
        <input className='border-2 border-dotted border-black rounded-full mr-2 py-2 px-4' type="text" onChange={handleChange} value={title} />
        <Button>Update</Button>
      </form>
    </div>
  )
}

export default TodoEdit
