// 1.3. FilterBtns

import { useState } from "react";
import { useInputContext } from "../../../context/InputContext";
import Button from "../../atoms/button";
import "./style.css";

function FilterBtns() {
  const { todos, setTodos } = useInputContext();
  const [focus, setFocus] = useState(["focused", "unfocused", "unfocused"]);

  function handleAllBtnClick() {
    const updatedTodos = todos.map((todo) => ({ ...todo, visibility: true }));
    setTodos(updatedTodos);
    setFocus(["focused", "unfocused", "unfocused"]);
  }

  function handleActiveBtnClick() {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      visibility: !todo.checked,
    }));
    setTodos(updatedTodos);
    setFocus(["unfocused", "focused", "unfocused"]);
  }

  function handleCompletedBtnClick() {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      visibility: todo.checked,
    }));
    setTodos(updatedTodos);
    setFocus(["unfocused", "unfocused", "focused"]);
  }

  return (
    <>
      <div className="filter-btns">
        <Button id="all-btn" className={focus[0]} onClick={handleAllBtnClick}>
          All
        </Button>
        <Button
          id="active-btn"
          className={focus[1]}
          onClick={handleActiveBtnClick}
        >
          Active
        </Button>
        <Button
          id="completed-btn"
          className={focus[2]}
          onClick={handleCompletedBtnClick}
        >
          Done
        </Button>
      </div>
    </>
  );
}

export default FilterBtns;
