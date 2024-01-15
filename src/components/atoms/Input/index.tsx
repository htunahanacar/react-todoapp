import React from "react";
import styles from "./style.module.css";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, ...rest }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={styles.addTodo}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Input;
