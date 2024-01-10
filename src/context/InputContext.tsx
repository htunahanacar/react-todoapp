// InputContext

import React, { createContext, useContext, ReactNode } from "react";

export interface TodosProps {
  id: number;
  text: string;
  checked: boolean;
  visibility: boolean;
}

interface InputContextProps {
  todoText: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  todos: TodosProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>;
}

const InputContext = createContext<InputContextProps | undefined>(undefined);

export const InputProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todoText, setTodoText] = React.useState<string>("");
  const [todos, setTodos] = React.useState([
    { id: 0, text: "Pet a cat", checked: false, visibility: true },
    { id: 1, text: "Go for a walk", checked: false, visibility: true },
    { id: 2, text: "Learn React", checked: false, visibility: true },
  ]);

  return (
    <InputContext.Provider value={{ todoText, setTodoText, todos, setTodos }}>
      {children}
    </InputContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInputContext must be used within an InputProvider");
  }
  return context;
};
