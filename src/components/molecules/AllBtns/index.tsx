// 1.2.2. AllBtns

import { useContext, useState } from "react";
import { TodoContext } from "../../../context/TodoContext";

import styles from "./style.module.css";
import Button from "../../atoms/Button";

interface AllBtnProps {
  countTodo: number;
}

function AllBtns({ countTodo }: AllBtnProps) {
  const { dispatch } = useContext(TodoContext);
  const [isFirstClick, setIsFirstClick] = useState(true);

  const handleDeleteAllClick = () => dispatch({ type: "REMOVE_ALL_TODO" });

  const handleCheckAllClick = () => {
    if (isFirstClick) {
      dispatch({ type: "CHECK_ALL_TODO" });
    } else {
      dispatch({ type: "UNCHECK_ALL_TODO" });
    }
    setIsFirstClick(!isFirstClick);
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
