// 2. TodoContext

import { Dispatch, FC, ReactNode, createContext, useEffect, useReducer } from "react";
import { toDoReducer } from "../hooks/toDoReducer";

export interface TodosProps {
  id?: string;
  text?: string;
  checked?: boolean;
  visibility?: boolean;
}

export interface ActionProps {
  type: string;
  todo?: TodosProps;
  id?: string;
}

interface TodoContextProps {
  todos: TodosProps[];
  dispatch: Dispatch<ActionProps>;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  dispatch: () => {},}
);

interface TodoContextProviderProps {
  children: ReactNode;
}

const placeholderValues = [
  { id: 0, text: "Pet a cat", checked: false, visibility: true },
  { id: 1, text: "Go for a walk", checked: false, visibility: true },
  { id: 2, text: "Learn React", checked: false, visibility: true },
];

const TodoContextProvider: FC<TodoContextProviderProps> = ({ children }) => {
  const [todos, dispatch] = useReducer(toDoReducer, [], () => {
    const localData = localStorage.getItem("mytodos");
    return localData ? JSON.parse(localData) : placeholderValues;
  });

  useEffect(() => {
    localStorage.setItem("mytodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
