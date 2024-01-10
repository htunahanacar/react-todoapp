import ToDoApp from "./components/templates";
import Footer from "./components/molecules/footer";
import Header from "./components/molecules/header";
import { InputProvider } from "./context/InputContext";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <InputProvider>
          <ToDoApp />
        </InputProvider>
        <Footer />
      </div>
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
