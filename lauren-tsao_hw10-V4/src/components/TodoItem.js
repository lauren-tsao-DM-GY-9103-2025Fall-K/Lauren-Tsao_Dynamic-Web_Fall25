import {useState} from 'react'
import TodoEdit from './TodoEdit'
import useTodoContext from '../hooks/use-todo-context'

const TodoItem = ({todo}) => {
const {deleteTodoById, editTodoById} = useTodoContext()

  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = () => {
    deleteTodoById(todo.id)
  }

  
  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }


  const handleSubmit = (id, newTitle) => {
    editTodoById(todo.id, newTitle)
    setShowEdit(false)
  }

  let content = (
    <div>
      {todo.title}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleShowEdit}>Edit</button>
    </div>
  )
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return <div>{content}</div>
}

export default TodoItem
