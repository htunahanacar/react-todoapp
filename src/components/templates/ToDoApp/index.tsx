// 1. todoapp

import CreateTodo from "../../molecules/createTodo";
import FilterBtns from "../../molecules/filterBtns";
import Footer from "../../molecules/footer";
import Header from "../../molecules/header";
import ToDoList from "../../organisms/todoList";
import styles from "./style.module.css";

function ToDoApp() {
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
