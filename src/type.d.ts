interface ITodo {
    id: number
    title: string
    description: string
    dueDate: Date
    priority: number
  }
  
  type TodoState = {
    todos: ITodo[]
  }
  
  type TodoAction = {
    type: string
    todo?: ITodo
  }
  
  type DispatchType = (args: TodoAction) => TodoAction