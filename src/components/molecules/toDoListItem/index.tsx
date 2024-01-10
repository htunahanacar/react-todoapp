// 1.2.1. ToDoListItem

import { FaRegCircle } from "react-icons/fa6";
import { PiConfettiFill } from "react-icons/pi";

import { LiaTimesSolid } from "react-icons/lia";
import "./style.css";
import Button from "../../atoms/button";
import { useInputContext } from "../../../context/InputContext";
import { useState } from "react";

interface ToDoListItemProps {
  todo: string;
  index: number;
}

function ToDoListItem({ todo, index }: ToDoListItemProps) {
  const { todos, setTodos } = useInputContext();
  const [selected, setSelected] = useState("");
  const [isFirstClick, setIsFirstClick] = useState(true);
  const [displayIcon, setDisplayIcon] = useState(["", "hidden"]);

  const handleDeleteClick = () => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleCheckClick = () => {
    if (isFirstClick) {
      setSelected(" selected");
      setDisplayIcon(["hidden", ""]);
    } else {
      setSelected("");
      setDisplayIcon(["", "hidden"]);
    }
    setIsFirstClick(!isFirstClick);
  };

  return (
    <>
      <div className={"todo" + selected}>
        <div className="checkBtnAndLi" onClick={handleCheckClick}>
          <Button className="checkTodo" aria-hidden="true">
            <FaRegCircle className={displayIcon[0]} />
            <PiConfettiFill className={displayIcon[1]} />
          </Button>
          <li className={selected}>{todo}</li>
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
