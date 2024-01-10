// 1.2.1. ToDoListItem

import { FaRegCircle } from "react-icons/fa6";
import { PiConfettiFill } from "react-icons/pi";

import { LiaTimesSolid } from "react-icons/lia";
import "./style.css";
import Button from "../../atoms/button";
import { useInputContext } from "../../../context/InputContext";

interface ToDoListItemProps {
  todo: string;
  id: number;
  checked: boolean;
}

function ToDoListItem({ todo, id, checked }: ToDoListItemProps) {
  const { todos, setTodos } = useInputContext();

  const handleDeleteClick = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCheckClick = () => {
    const updatedTodos = [...todos];
    updatedTodos[id - 1].checked = !updatedTodos[id - 1].checked;
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className={"todo" + (checked ? " selected" : "")}>
        <div className="checkBtnAndLi" onClick={handleCheckClick}>
          <Button className="checkTodo" aria-hidden="true">
            <FaRegCircle className={checked ? " hidden" : ""} />
            <PiConfettiFill className={checked ? "" : " hidden"} />
          </Button>
          <li className={checked ? " selected" : ""}>{todo}</li>
        </div>
        <Button
          className="deleteTodo"
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
