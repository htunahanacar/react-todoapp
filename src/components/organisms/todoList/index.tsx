// 1.2. ToDoList

import { useInputContext } from "../../../context/InputContext";
import AllBtns from "../../molecules/allBtns";
import ToDoListItem from "../../molecules/toDoListItem";
import "./style.css";

function ToDoList() {
  const { todos } = useInputContext();

  return (
    <>
      <div className="todolist-container">
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
            <div className="no-item-placeholder">
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
