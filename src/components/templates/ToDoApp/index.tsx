// 1. todoapp
import CreateTodo from "../../molecules/CreateToDo/index.tsx";
import FilterBtns from "../../molecules/FilterBtns/index.tsx";
import ToDoList from "../../organisms/ToDoList/index.tsx";
import Header from "../../molecules/Header/index.tsx";
import Footer from "../../molecules/Footer/index.tsx";
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
