// 1.1.1 Circle
import styles from "./style.module.css";
import { FaRegCircle } from "react-icons/fa6";

function Circle() {
  return (
    <>
      <i className={styles.circle} aria-hidden="true">
        <FaRegCircle />
      </i>
    </>
  );
}

export default Circle;
