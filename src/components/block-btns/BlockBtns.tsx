import { observer } from "mobx-react-lite";
import todoStore from "../../store/todo-store";
import styles from "./blockBtns.module.css";

export const Btns = observer(() => {
  const {
    removeTodoItemFirst,
    removeTodoItemLast,
    selectTodoItemEven,
    selectTodoItemOdd,
  } = todoStore;
  return (
    <div className={styles.container}>
      <button className={styles.delete} onClick={removeTodoItemFirst}>
        {"Удалить первое дело"}
      </button>
      <button className={styles.delete} onClick={removeTodoItemLast}>
        {"Удалить последнее дело"}
      </button>
      <button className={styles.done} onClick={selectTodoItemEven}>
        {"Выбрать четные дела"}
      </button>
      <button className={styles.done} onClick={selectTodoItemOdd}>
        {"Выбрать нечетные дела"}
      </button>
    </div>
  );
});
