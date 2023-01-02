import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import axios from 'axios'
import env from "react-dotenv";

type Props = {
  todo: ITodo
  removeTodo: (todo: ITodo) => void
}

export const Todo: React.FC<Props> = ({ todo, removeTodo }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteTodo = (todo:ITodo) => {
    axios.delete(`${env.API_URL}/todos/${todo.id}`)
    .then(res => {
      if(res.data){
        dispatch(removeTodo(todo))
      }
     });
  }

  return (
    <div className="Todo">
      <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
      </div>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  )
}