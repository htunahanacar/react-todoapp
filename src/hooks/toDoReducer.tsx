// 3. toDoReducer
import { TodosProps, ActionProps } from "../context/TodoContext";


export const toDoReducer = (state: TodosProps[], action: ActionProps): TodosProps[]  => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.todo) {
        return [
          ...state,
          {
            id: crypto.randomUUID(),
            text: action.todo.text,
            checked: false,
            visibility: true,
          },
        ];
      }
      return state;
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "CHECK_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case "CHECK_ALL_TODO":
      return state.map((todo) => ({ ...todo, checked: true }));
    case "UNCHECK_ALL_TODO":
      return state.map((todo) => ({ ...todo, checked: false }));
    case "REMOVE_ALL_TODO":
      return (state = []);
    case "SEE_ALL":
      return state.map((todo) => ({ ...todo, visibility: true }));
    case "SEE_ACTIVE":
      return state.map((todo) => ({ ...todo, visibility: !todo.checked }));
    case "SEE_DONE":
      return state.map((todo) => ({ ...todo, visibility: todo.checked }));
    default:
      return state;
  }
};
