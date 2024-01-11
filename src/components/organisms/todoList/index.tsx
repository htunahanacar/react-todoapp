// 1.2. ToDoList

import { useInputContext } from "../../../context/InputContext";
import AllBtns from "../../molecules/AllBtns";
import ToDoListItem from "../../molecules/ToDoListItem";
import styles from "./style.module.css";

function ToDoList() {
  const { todos } = useInputContext();

  return (
    <>
      <div className={styles.ToDoListContainer}>
        <div id="todos">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <ToDoListItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                checked={todo.checked}
                visibility={todo.visibility}
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
