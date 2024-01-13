import ToDoApp from "./components/templates/ToDoApp";
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <>
      <TodoContextProvider>
        <ToDoApp />
      </TodoContextProvider>
    </>
  );
}

export default App;

// 1. todoapp

// 1.1. CreateTodo
// 1.1.1 Circle
// 1.1.2. Input

// 1.2. ToDoList
// 1.2.1. ToDoListItem
// 1.2.2. AllBtns

// 1.3. FilterBtns

// 2. TodoContext

// 3. toDoReducer