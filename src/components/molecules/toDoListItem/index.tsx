// 1.2.1. ToDoListItem

import { FaRegCircle } from "react-icons/fa6";
import { PiConfettiFill } from "react-icons/pi";

import { LiaTimesSolid } from "react-icons/lia";
import styles from "./style.module.css";
import Button from "../../atoms/Button";
import { TodosProps, useInputContext } from "../../../context/InputContext";

function ToDoListItem({ text, id, checked, visibility }: TodosProps) {
  const { setTodos } = useInputContext();

  const handleDeleteClick = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleCheckClick = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <>
      <div
        className={
          styles.todo +
          (checked ? " " + styles.selected : "") +
          (visibility ? "" : " " + styles.hidden)
        }
      >
        <div className={styles.checkButtonAndLi} onClick={handleCheckClick}>
          <Button className={styles.checkTodo} aria-hidden="true">
            <FaRegCircle className={checked ? " " + styles.hidden : ""} />
            <PiConfettiFill className={checked ? "" : " " + styles.hidden} />
          </Button>
          <li className={checked ? " " + styles.selected : ""}>{text}</li>
        </div>
        <Button
          className={styles.deleteTodo}
          aria-hidden="true"
          onClick={handleDeleteClick}
        >
          <LiaTimesSolid />
        </Button>
      </div>
    </>
  );
}

export default ToDoListItem;
