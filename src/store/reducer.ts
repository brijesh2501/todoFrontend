import * as actionTypes from "./actionTypes";

let initialState: TodoState = {todos: []};

const reducer = (
    state: TodoState = initialState,
    action: any
  ): any => {
    switch (action.type) {
      case actionTypes.ADD_TODO:
        const newTodo:ITodo = {
          id: action.todo.id,
          title: action.todo.title,
          description: action.todo.description,
          dueDate: action.todo.dueDate,
          priority: action.todo.priority
        }
        
        return {
          ...state,
          todos: state.todos.concat(newTodo),
        }
        case actionTypes.GET_TODOS:
        
          return {
            ...state,
            todos: action.todo,
          } 
          
        case actionTypes.GET_TODO:
        
          return {
            ...state,
            todos: action.todo,
          }  
      case actionTypes.REMOVE_TODO:
        const updatedTodos: ITodo[] = state.todos.filter(
          todo => todo.id !== action.todo.id
        )
        return {
          ...state,
          todos: updatedTodos,
        }
    }
    return state
  }
  
  export default reducer