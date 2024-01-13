// 1. todoapp


import CreateTodo from "../../molecules/CreateTodo";
import FilterBtns from "../../molecules/FilterBtns";
import Footer from "../../molecules/Footer";
import Header from "../../molecules/Header";
import ToDoList from "../../organisms/ToDoList";
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
