// 1. todoapp
import { useEffect } from "react";
import { useInputContext } from "../../context/InputContext";
import CreateTodo from "../molecules/createTodo/createTodo";
import FilterBtns from "../molecules/filterBtns/filterBtns";
import ToDoList from "../organisms/todoList";

function ToDoApp() {
  const { todos } = useInputContext();
  useEffect(() => {
    localStorage.setItem("mytodos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <CreateTodo />
      <ToDoList />
      <FilterBtns />
    </>
  );
}

export default ToDoApp;
