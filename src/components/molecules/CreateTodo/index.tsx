// 1.1. CreateTodo

import { LiaPlusSolid } from "react-icons/lia";
import styles from "./style.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";
import Circle from "../../atoms/Circle/index";
import Input from "../../atoms/Input/index";
import Button from "../../atoms/Button/index";

interface FormInputs {
  formText: string;
}

function CreateTodo() {
  const { dispatch } = useContext(TodoContext);
  const { register, handleSubmit, reset } = useForm<FormInputs>({
    defaultValues: {
      formText: "",
    },
  });
  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    dispatch({ type: "ADD_TODO", todo: { text: data.formText } });
    reset();
  };

  return (
    <>
      <form
        className={styles.createTodoContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Circle />
        <Input
          type="text"
          placeholder="Create a new todo..."
          {...register("formText", { required: true, maxLength: 60 })}
        />
        <Button
          type="submit"
          className={styles.addTodoButton}
          aria-hidden="true"
        >
          <LiaPlusSolid />
        </Button>
      </form>
    </>
  );
}

export default CreateTodo;
