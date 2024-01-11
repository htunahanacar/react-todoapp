// 1.3. FilterBtns

import { useState } from "react";
import { useInputContext } from "../../../context/InputContext";
import Button from "../../atoms/Button";
import styles from "./style.module.css";
enum FocusType {
  ALL = "all",
  ACTIVE = "active",
  DONE = "done",
}

function FilterBtns() {
  const { todos, setTodos } = useInputContext();
  const [focus, setFocus] = useState<FocusType>(FocusType.ALL);

  function handleAllBtnClick() {
    const updatedTodos = todos.map((todo) => ({ ...todo, visibility: true }));
    setTodos(updatedTodos);
    setFocus(FocusType.ALL);
  }

  function handleActiveBtnClick() {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      visibility: !todo.checked,
    }));
    setTodos(updatedTodos);
    setFocus(FocusType.ACTIVE);
  }

  function handleCompletedBtnClick() {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      visibility: todo.checked,
    }));
    setTodos(updatedTodos);
    setFocus(FocusType.DONE);
  }

  return (
    <>
      <div className={styles.filterBtnsContainer}>
        <Button
          className={
            styles.filterButton +
            " " +
            (FocusType.ALL === focus ? styles.focused : "")
          }
          onClick={handleAllBtnClick}
        >
          All
        </Button>
        <Button
          className={
            styles.filterButton +
            " " +
            (FocusType.ACTIVE === focus ? styles.focused : "")
          }
          onClick={handleActiveBtnClick}
        >
          Active
        </Button>
        <Button
          className={
            styles.filterButton +
            " " +
            (FocusType.DONE === focus ? styles.focused : "")
          }
          onClick={handleCompletedBtnClick}
        >
          Done
        </Button>
      </div>
    </>
  );
}

export default FilterBtns;
