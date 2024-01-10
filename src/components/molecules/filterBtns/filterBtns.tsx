// 1.3. FilterBtns

import { useInputContext } from "../../../context/InputContext";
import Button from "../../atoms/button";
import "./style.css";

function FilterBtns() {
  const { todos, setTodos } = useInputContext();

  function handleAllBtnClick() {
    const updatedTodos = todos.map((todo) => ({ ...todo, visibility: true }));
    setTodos(updatedTodos);
  }

  function handleActiveBtnClick() {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      visibility: !todo.checked,
    }));
    setTodos(updatedTodos);
  }

  function handleCompletedBtnClick() {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      visibility: todo.checked,
    }));
    setTodos(updatedTodos);
  }

  return (
    <>
      <div className="filter-btns">
        <Button id="all-btn" className="focused" onClick={handleAllBtnClick}>
          All
        </Button>
        <Button
          id="active-btn"
          className="unfocused"
          onClick={handleActiveBtnClick}
        >
          Active
        </Button>
        <Button
          id="completed-btn"
          className="unfocused"
          onClick={handleCompletedBtnClick}
        >
          Done
        </Button>
      </div>
    </>
  );
}

export default FilterBtns;
