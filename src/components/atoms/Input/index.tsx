// 1.1.2. Input

import styles from "./style.module.css";

interface InputProps {
  register: any;
  label: string;
  required?: boolean;
  maxLength?: number;
}

function Input({ register, label, required, maxLength }: InputProps) {
  return (
    <input
      {...register(label, { required: required, maxLength: maxLength })}
      type="text"
      placeholder="Create a new todo..."
      className={styles.addTodo}
    />
  );
}

export default Input;
