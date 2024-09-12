import todoStore from "../../store/todo-store";
import { observer } from "mobx-react-lite";
import styles from "./list.module.css";
import { Item } from "../item";
import { Btns } from "../block-btns";

export const List = observer(() => {
  const { todos, selectedTodos, doneTodos } = todoStore;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {todos.map((todo, index) => (
          <li
            className={styles.item}
            key={todo.id}
            style={{
              backgroundColor: selectedTodos.includes(todo) ? "#87cefa" : "",
            }}>
            <Item text={todo.text} index={index} />
          </li>
        ))}
        {doneTodos.map((todo, index) => (
          <li className={styles.item} key={todo.id}>
            <Item text={todo.text} index={index} done={todo.done} />
          </li>
        ))}
      </ul>

      {(todos.length > 0 || doneTodos.length > 0) && <Btns />}
    </div>
  );
});
