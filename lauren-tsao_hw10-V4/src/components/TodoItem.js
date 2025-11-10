import {useState} from 'react'
import TodoEdit from './TodoEdit'
import useTodoContext from '../hooks/use-todo-context'
import Button from './Button'

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
    <div className='w-80 flex m-4 p-2 justify-between'>
      <div className='py-2 px-4'>{todo.title}</div>
      <div>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleShowEdit}>Edit</Button>
      </div>
    </div>
  )
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return <div>{content}</div>
}

export default TodoItem
