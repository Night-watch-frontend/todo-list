import { FC } from "react";
import todoStore from "../../store/todo-store";
import styles from "./item.module.css";

type Itemprops = {
  text: string;
  index: number;
  done?: boolean;
};
export const Item: FC<Itemprops> = ({ text, index, done }) => {
  const { todoItemDone, removeTodoItem, removeDoneTodoItem } = todoStore;
  return (
    <div className={styles.container}>
      <p
        className={styles.text}
        style={{
          textDecoration: done ? "line-through" : "none",
          textDecorationColor: done ? "#1e90ff" : "none",
        }}>
        {text}
      </p>
      <button
        className={styles.done}
        onClick={() => todoItemDone(index)}
        disabled={done}>
        {"Сделано"}
      </button>
      {done ? (
        <button
          className={styles.delete}
          onClick={() => removeDoneTodoItem(index)}>
          {"Удалить"}
        </button>
      ) : (
        <button className={styles.delete} onClick={() => removeTodoItem(index)}>
          {"Удалить"}
        </button>
      )}
    </div>
  );
};
