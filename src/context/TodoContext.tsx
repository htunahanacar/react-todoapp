// TodoContext

import { createContext, useEffect, useReducer } from "react";
import { toDoReducer } from "../hooks/toDoReducer";

export interface TodosProps {
  id: number;
  text: string;
  checked: boolean;
  visibility: boolean;
}

interface TodoContextProps {
  todos: TodosProps[];
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

const placeholderValues = [
  { id: 0, text: "Pet a cat", checked: false, visibility: true },
  { id: 1, text: "Go for a walk", checked: false, visibility: true },
  { id: 2, text: "Learn React", checked: false, visibility: true },
];

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(toDoReducer, [], () => {
    const localData = localStorage.getItem("mytodos");
    return localData ? JSON.parse(localData) : placeholderValues;
  });

  useEffect(() => {
    localStorage.setItem("mytodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
