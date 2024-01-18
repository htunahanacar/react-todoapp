gmghimport {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={RootLayout()}>
      <Route index element={<Home />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
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
