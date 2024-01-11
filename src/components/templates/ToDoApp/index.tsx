// 1. todoapp
import { useEffect } from "react";
import { useInputContext } from "../../../context/InputContext";
import CreateTodo from "../../molecules/createTodo/createTodo";
import FilterBtns from "../../molecules/filterBtns/filterBtns";
import ToDoList from "../../organisms/todoList";
import Header from "../../molecules/header";
import Footer from "../../molecules/footer";
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
