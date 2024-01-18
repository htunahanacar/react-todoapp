// 1.2. ToDoList

import { useContext } from "react";
import styles from "./style.module.css";
import { TodoContext } from "../../../context/TodoContext";
import ToDoListItem from "../../molecules/ToDoListItem";
import AllBtns from "../../molecules/AllBtns";

function ToDoList() {
  const { todos } = useContext(TodoContext);
  const { dispatch } = useContext(TodoContext);
  const handleCheckClick = (todoId: string | undefined) => {
    dispatch({ type: "CHECK_TODO", id: todoId });
  };

  const handleDeleteClick = (todoId: string | undefined) => {
    dispatch({ type: "REMOVE_TODO", id: todoId });
  };

  return (
    <>
      <div className={styles.ToDoListContainer}>
        <div id="todos">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <ToDoListItem
                todo={todo}
                key={todo.id}
                handleCheckClick={() => handleCheckClick(todo.id)}
                handleDeleteClick={() => handleDeleteClick(todo.id)}
              />
            ))
          ) : (
            <div className={styles.noItemPlaceHolder}>
              <li>You have no todos yet. Add one!</li>
            </div>
          )}
        </div>
        <AllBtns countTodo={todos.length} />
      </div>
    </>
  );
}

export default ToDoList;
