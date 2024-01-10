// 1.1.2. Input

import { ChangeEvent } from "react";
import "./style.css";

interface InputProps {
  onInputChange: (value: string) => void;
  value: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Input({ onInputChange, value, onKeyDown }: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Create a new todo..."
      id="add-todo"
      value={value}
      onChange={handleChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Input;
