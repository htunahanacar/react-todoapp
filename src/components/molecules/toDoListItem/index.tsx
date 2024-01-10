// 1.2.1. ToDoListItem

import { FaRegCircle } from "react-icons/fa6";
import { PiConfettiFill } from "react-icons/pi";

import { LiaTimesSolid } from "react-icons/lia";
import "./style.css";
import Button from "../../atoms/button";
import { TodosProps, useInputContext } from "../../../context/InputContext";

function ToDoListItem({ text, id, checked, visibility }: TodosProps) {
  const { todos, setTodos } = useInputContext();

  const handleDeleteClick = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
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
          "todo" + (checked ? " selected" : "") + (visibility ? "" : " hidden")
        }
      >
        <div className="checkBtnAndLi" onClick={handleCheckClick}>
          <Button className="checkTodo" aria-hidden="true">
            <FaRegCircle className={checked ? " hidden" : ""} />
            <PiConfettiFill className={checked ? "" : " hidden"} />
          </Button>
          <li className={checked ? " selected" : ""}>{text}</li>
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
