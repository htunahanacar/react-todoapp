// 1.1. CreateTodo
import Circle from "../../atoms/Circle";
import Input from "../../atoms/input";
import { useInputContext } from "../../../context/InputContext";
import Button from "../../atoms/Button";
import { LiaPlusSolid } from "react-icons/lia";
import styles from "./style.module.css";

function CreateTodo() {
  const { todoText, setTodoText, todos, setTodos } = useInputContext();

  const handleInputChange = (inputValue: string) => {
    setTodoText(inputValue);
  };

  const handleAddTodo = () => {
    if (todoText.length == 0) {
      alert("Please enter a todo");
    } else {
      const newTodo = {
        id: todos.length,
        text: todoText,
        checked: false,
        visibility: true,
      };
      setTodos([...todos, newTodo]);
      setTodoText("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <>
      <div className={styles.createTodoContainer}>
        <Circle />
        <Input
          onInputChange={handleInputChange}
          value={todoText}
          onKeyDown={handleKeyPress}
        />
        <Button
          className={styles.addTodoButton}
          aria-hidden="true"
          onClick={handleAddTodo}
        >
          <LiaPlusSolid />
        </Button>
      </div>
    </>
  );
}

export default CreateTodo;
