// 1. todoapp

import CreateTodo from "../../molecules/CreateTodo";
import FilterBtns from "../../molecules/FilterBtns";
import ToDoList from "../../organisms/ToDoList";

function ToDoApp() {
  return (
    <>
      <CreateTodo />
      <ToDoList />
      <FilterBtns />
    </>
  );
}

export default ToDoApp;
