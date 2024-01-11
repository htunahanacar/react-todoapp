// 1.2.2. AllBtns

import { useState } from "react";
import { TodosProps, useInputContext } from "../../../context/InputContext";
import Button from "../../atoms/Button";
import styles from "./style.module.css";

interface AllBtnProps {
  countTodo: number;
}

function AllBtns({ countTodo }: AllBtnProps) {
  const { todos, setTodos } = useInputContext();
  const [isFirstClick, setIsFirstClick] = useState(true);

  const handleDeleteAllClick = () => {
    const updatedTodos: TodosProps[] = [];
    setTodos(updatedTodos);
  };

  const handleCheckAllClick = () => {
    let updatedTodos;
    if (isFirstClick) {
      updatedTodos = todos.map((todo) => ({ ...todo, checked: true }));
    } else {
      updatedTodos = todos.map((todo) => ({ ...todo, checked: false }));
    }
    setIsFirstClick(!isFirstClick);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className={styles.allButtons}>
        <p className={styles.countTodos}>{countTodo} items left</p>
        <Button className={styles.allButton} onClick={handleDeleteAllClick}>
          Clear
        </Button>
        <Button className={styles.allButton} onClick={handleCheckAllClick}>
          Done
        </Button>
      </div>
    </>
  );
}

export default AllBtns;
