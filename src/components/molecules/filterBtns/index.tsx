// 1.3. FilterBtns

import { useContext, useState } from "react";
import { TodoContext } from "../../../context/TodoContext";
import styles from "./style.module.css";
import Button from "../../atoms/Button";
enum FocusType {
  ALL = "all",
  ACTIVE = "active",
  DONE = "done",
}

function FilterBtns() {
  const { dispatch } = useContext(TodoContext);
  const [focus, setFocus] = useState<FocusType>(FocusType.ALL);

  const handleAllBtnClick = () => {
    dispatch({ type: "SEE_ALL" });
    setFocus(FocusType.ALL);
  };

  const handleActiveBtnClick = () => {
    dispatch({ type: "SEE_ACTIVE" });
    setFocus(FocusType.ACTIVE);
  };

  const handleDoneBtnClick = () => {
    dispatch({ type: "SEE_DONE" });
    setFocus(FocusType.DONE);
  };

  return (
    <>
      <div className={styles.filterBtnsContainer}>
        <Button
          className={
            styles.filterButton +
            " " +
            (FocusType.ALL === focus ? styles.focused : "")
          }
          onClick={handleAllBtnClick}
        >
          All
        </Button>
        <Button
          className={
            styles.filterButton +
            " " +
            (FocusType.ACTIVE === focus ? styles.focused : "")
          }
          onClick={handleActiveBtnClick}
        >
          Active
        </Button>
        <Button
          className={
            styles.filterButton +
            " " +
            (FocusType.DONE === focus ? styles.focused : "")
          }
          onClick={handleDoneBtnClick}
        >
          Done
        </Button>
      </div>
    </>
  );
}

export default FilterBtns;
