// TodoContext

import React, { createContext, useContext, ReactNode } from "react";

export interface TodosProps {
  id: number;
  text: string;
  checked: boolean;
  visibility: boolean;
}

interface TodoContextProps {
  todoText: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  todos: TodosProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todoText, setTodoText] = React.useState<string>("");
  const [todos, setTodos] = React.useState(() => {
    const localData = localStorage.getItem("mytodos");
    return localData
      ? JSON.parse(localData)
      : [
          { id: 0, text: "Pet a cat", checked: false, visibility: true },
          { id: 1, text: "Go for a walk", checked: false, visibility: true },
          { id: 2, text: "Learn React", checked: false, visibility: true },
        ];
  });

  return (
    <TodoContext.Provider value={{ todoText, setTodoText, todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within an TodoProvider");
  }
  return context;
};
