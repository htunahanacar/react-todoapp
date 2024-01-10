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
    if (value.length <= 60) {
      onInputChange(e.target.value);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("text");

    if (pastedText.length + value.length <= 60) {
      onInputChange(value + pastedText);
    } else {
      onInputChange(value + pastedText.slice(0, 60 - value.length));
    }
    e.preventDefault();
  };

  return (
    <input
      type="text"
      placeholder="Create a new todo..."
      id="add-todo"
      value={value}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      onPaste={handlePaste}
    />
  );
}

export default Input;
