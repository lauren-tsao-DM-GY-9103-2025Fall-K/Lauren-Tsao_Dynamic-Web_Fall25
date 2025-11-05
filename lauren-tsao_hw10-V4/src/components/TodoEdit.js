import {useState} from 'react'

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
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={title} />
        <button>Update</button>
      </form>
    </div>
  )
}

export default TodoEdit
