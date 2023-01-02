import * as actionTypes from "./actionTypes";

export function addTodo(todo:any) {
  const action = {
    type: actionTypes.ADD_TODO,
    todo,
  }

  return simulateHttpRequest(action)
}

export function getTodos(todo: any) {
  const action = {
    type: actionTypes.GET_TODO,
    todo,
  }

  return simulateHttpRequest(action)
}

export function removeTodo(todo: any) {
  const action = {
    type: actionTypes.REMOVE_TODO,
    todo,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: TodoAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}