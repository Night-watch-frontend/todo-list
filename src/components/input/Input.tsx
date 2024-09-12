import { FC, useState } from "react";
import todoStore from "../../store/todo-store";
import { observer } from "mobx-react-lite";
import styles from "./input.module.css";

export const Input: FC = observer(() => {
  const [text, setText] = useState("");
  const { addTodo } = todoStore;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ text: text, done: false, id: Date.now() });
    setText("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        className={styles.input}
        placeholder="Добавьте дело"
      />
      <button className={styles.btn} type="submit" disabled={text === ""}>
        {"Добавить дело"}
      </button>
    </form>
  );
});
