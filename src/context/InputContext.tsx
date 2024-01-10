import React, { createContext, useContext, ReactNode } from "react";

interface InputContextProps {
  todoText: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

const InputContext = createContext<InputContextProps | undefined>(undefined);

export const InputProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todoText, setTodoText] = React.useState<string>("");
  const [todos, setTodos] = React.useState<string[]>([
    "Pet a cat",
    "Go for a walk",
    "Learn React",
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
