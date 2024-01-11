// 1. todoapp
import { useEffect } from "react";
import { useInputContext } from "../../../context/InputContext";
import CreateTodo from "../../molecules/CreateToDo/createTodo";
import FilterBtns from "../../molecules/FilterBtns/filterBtns";
import ToDoList from "../../organisms/ToDoList";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";
import styles from "./style.module.css";

function ToDoApp() {
  const { todos } = useInputContext();
  useEffect(() => {
    localStorage.setItem("mytodos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className={styles.container}>
        <Header />
        <CreateTodo />
        <ToDoList />
        <FilterBtns />
        <Footer />
      </div>
    </>
  );
}

export default ToDoApp;
