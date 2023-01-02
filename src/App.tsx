import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./styles.css"
import { getTodos } from "./store/actionCreators";

import { Todo } from "./components/Todo"
import { AddTodo } from "./components/AddTodo"
import { addTodo, removeTodo } from "./store/actionCreators"
import { Dispatch } from "redux"
import axios from 'axios'
import env from "react-dotenv";

const App: React.FC = () => {
  const todos: readonly ITodo[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  )
  useEffect(():any => {
    let mounted = true;
    axios.get(`${env.API_URL}/todos`)
      .then(res => {
        if(mounted && res.data){
        dispatch(getTodos(res.data))
        }
    });
    return () => (mounted = false);
  }, [todos]);

  const dispatch: Dispatch<any> = useDispatch()

  const saveTodo = React.useCallback(
    (todo: ITodo) => dispatch(addTodo(todo)),
    [dispatch]
  )

  return (
    <main>
      <h1>My todos</h1>
      <AddTodo saveTodo={saveTodo} />
      {todos.map((todo: ITodo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
        />
      ))}
    </main>
  )
}

export default App