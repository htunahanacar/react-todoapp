// 1.1. CreateTodo
import Circle from "../../atoms/circle";
import Input from "../../atoms/input";
import { useInputContext } from "../../../context/InputContext";
import Button from "../../atoms/button";
import { LiaPlusSolid } from "react-icons/lia";
import "./style.css";

function CreateTodo() {
  const { todoText, setTodoText, todos, setTodos } = useInputContext();

  const handleInputChange = (inputValue: string) => {
    setTodoText(inputValue);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: todos.length, // Yeni todo için bir id atayın (örnekte sıralı)
      text: todoText,
      checked: false,
      visibility: true,
    };
    setTodos([...todos, newTodo]); // todos array'ine yeni todo ekleyin
    setTodoText("");
    console.log(todos);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <>
      <div className="create-todo-container">
        <Circle />
        <Input
          onInputChange={handleInputChange}
          value={todoText}
          onKeyDown={handleKeyPress}
        />
        <Button
          id="add-todo-btn"
          className="add-todo-btn"
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
