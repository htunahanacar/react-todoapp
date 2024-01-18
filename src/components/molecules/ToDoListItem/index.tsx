// 1.2.1. ToDoListItem

import { FaRegCircle } from "react-icons/fa6";
import { PiConfettiFill } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import styles from "./style.module.css";
import Button from "../../atoms/Button";
import { TodosProps } from "../../../context/TodoContext";

interface ToDoListItemProps {
  todo: TodosProps;
  handleCheckClick: () => void;
  handleDeleteClick: () => void;
}

function ToDoListItem({
  todo,
  handleCheckClick,
  handleDeleteClick,
}: ToDoListItemProps) {
  return (
    <>
      <div
        className={
          styles.todo +
          (todo.checked ? " " + styles.selected : "") +
          (todo.visibility ? "" : " " + styles.hidden)
        }
      >
        <div className={styles.checkButtonAndLi} onClick={handleCheckClick}>
          <Button className={styles.checkTodo} aria-hidden="true">
            <FaRegCircle className={todo.checked ? " " + styles.hidden : ""} />
            <PiConfettiFill
              className={todo.checked ? "" : " " + styles.hidden}
            />
          </Button>
          <li className={todo.checked ? " " + styles.selected : ""}>
            {todo.text}
          </li>
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
