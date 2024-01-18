import ToDoApp from "../components/templates/ToDoApp";
import TodoContextProvider from "../context/TodoContext";

export default function Home() {
  return (
    <TodoContextProvider>
      <ToDoApp />
    </TodoContextProvider>
  );
}
