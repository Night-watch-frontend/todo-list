import { makeAutoObservable } from "mobx";

type TodoItem = {
  id: number;
  text: string;
  done: boolean;
};
class TodoStore {
  todos: TodoItem[] = JSON.parse(localStorage.getItem("todos") || "[]");
  selectedTodos: TodoItem[] = [];
  doneTodos: TodoItem[] = JSON.parse(
    localStorage.getItem("todos-done") || "[]"
  );

  constructor() {
    makeAutoObservable(this);
  }
  addTodo = (todo: TodoItem) => {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  };
  removeTodoItem = (index: number) => {
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  };
  removeDoneTodoItem = (index: number) => {
    this.doneTodos.splice(index, 1);
    localStorage.setItem("todos-done", JSON.stringify(this.doneTodos));
  };
  removeTodoItemFirst = () => {
    if (this.todos.length > 0) {
      this.todos.splice(0, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    } else {
      this.doneTodos.splice(0, 1);
      localStorage.setItem("todos-done", JSON.stringify(this.doneTodos));
    }
  };
  removeTodoItemLast = () => {
    if (this.doneTodos.length > 0) {
      this.doneTodos.splice(this.doneTodos.length - 1, 1);
      localStorage.setItem("todos-done", JSON.stringify(this.doneTodos));
    } else {
      this.todos.splice(this.todos.length - 1, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  };
  selectTodoItemOdd = () => {
    this.selectedTodos = this.todos.filter((_todo, index) => index % 2 === 0);
  };
  selectTodoItemEven = () => {
    this.selectedTodos = this.todos.filter((_todo, index) => index % 2 !== 0);
  };
  todoItemDone = (index: number) => {
    this.todos[index].done = true;
    const doneTodo = this.todos[index];
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.doneTodos.push(doneTodo);
    localStorage.setItem("todos-done", JSON.stringify(this.doneTodos));
  };
}

export default new TodoStore();
