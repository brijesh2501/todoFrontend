import * as React from "react"
import axios from 'axios'
import env from "react-dotenv";

type Props = {
  saveTodo: (todo: ITodo | any) => void
}

export const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [todo, setTodo] = React.useState<ITodo | {}>()

  const handleTodoData = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }
  
  const addNewTodo = (e: React.FormEvent) => {
    e.preventDefault()
    axios.post(`${env.API_URL}/todos`,todo)
      .then(res => {
        if(res.data){
          saveTodo(todo)
        }
    });
    
  }

  return (
    <form onSubmit={addNewTodo} className="Add-todo">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleTodoData}
      />
      <input
        type="text"
        id="description"
        placeholder="Description"
        onChange={handleTodoData}
      />
  
      <input
        type="text"
        id="priority"
        placeholder="Priority"
        onChange={handleTodoData}
      />
   
      <button>
        Add todo
      </button>
    </form>
  )
}