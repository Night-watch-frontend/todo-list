import { Input } from "../input";
import { List } from "../list";
import { observer } from "mobx-react-lite";
import todoStore from "../../store/todo-store";
import styles from "./todo.module.css";

export const Todo = observer(() => {
  const { todos, doneTodos } = todoStore;
  return (
    <>
      <header>
        <div className={styles.container}>
          <h1 className={styles.title}>{"Список дел"}</h1>
        </div>
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.descr}>
            {todos.length === 0 && doneTodos.length === 0 && (
              <p>{"Ваш список дел пуст, добавьте новое дело"}</p>
            )}
            {todos.length === 0 && doneTodos.length > 0 && (
              <p>{"Все дела выполнены"}</p>
            )}
            {(todos.length > 0 || doneTodos.length > 0) && (
              <div>
                <p>{`Создано ${todos.length}`}</p>
                <p>{`Выполнено ${doneTodos.length}`}</p>
              </div>
            )}
          </div>
          <Input />
          <List />
        </div>
      </main>
    </>
  );
});
