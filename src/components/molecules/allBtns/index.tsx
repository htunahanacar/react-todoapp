// 1.2.2. AllBtns

import { useInputContext } from "../../../context/InputContext";
import Button from "../../atoms/button";
import "./style.css";

interface AllBtnProps {
  countTodo: number;
}

function AllBtns({ countTodo }: AllBtnProps) {
  const { setTodos } = useInputContext();

  const handleDeleteAllClick = () => {
    const updatedTodos: string[] = [];
    setTodos(updatedTodos);
  };

  const handleCheckAllClick = () => {
    alert("clicked");
  };

  return (
    <>
      <div className="all-buttons">
        <p id="count-todos">{countTodo} items left</p>
        <Button id="clear-btn" onClick={handleDeleteAllClick}>
          Clear
        </Button>
        <Button id="complete-btn" onClick={handleCheckAllClick}>
          Done
        </Button>
      </div>
    </>
  );
}

export default AllBtns;
