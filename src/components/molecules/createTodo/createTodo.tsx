// 1.1. CreateTodo
import Circle from "../../atoms/Circle";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { LiaPlusSolid } from "react-icons/lia";
import styles from "./style.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";

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
          register={register}
          label="formText"
          required={true}
          maxLength={60}
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
