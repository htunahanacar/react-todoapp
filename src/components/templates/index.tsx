// 1. todoapp
import CreateTodo from "../molecules/createTodo/createTodo";
import FilterBtns from "../molecules/filterBtns/filterBtns";
import ToDoList from "../organisms/todoList";

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
