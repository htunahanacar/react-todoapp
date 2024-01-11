import styles from "./style.module.css";
import { FiSun } from "react-icons/fi";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      <i aria-hidden="true">
        <FiSun />
      </i>
    </div>
  );
}

export default Header;
