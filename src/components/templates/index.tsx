// 1. todoapp
import { useInputContext } from "../../context/InputContext";
import CreateTodo from "../molecules/createTodo/createTodo";
import FilterBtns from "../molecules/filterBtns/filterBtns";
import ToDoList from "../organisms/todoList";

function ToDoApp() {
  const { todos } = useInputContext(); // todos'u bağlamdan al

  return (
    <>
      <CreateTodo />
      <ToDoList todos={todos} />
      <FilterBtns />
    </>
  );
}

export default ToDoApp;
