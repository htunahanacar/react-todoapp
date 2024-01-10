// 1.2. ToDoList

import AllBtns from "../../molecules/allBtns";
import ToDoListItem from "../../molecules/toDoListItem";
import "./style.css";

interface ToDoListProps {
  todos: string[]; // ToDoList bileşenine todos prop'u eklendi
}

function ToDoList({ todos }: ToDoListProps) {
  return (
    <>
      <div className="todolist-container">
        <div id="todos">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <ToDoListItem key={index} index={index} todo={todo} />
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
