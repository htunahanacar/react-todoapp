import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { FiSun } from "react-icons/fi";

function Header() {
  return (
    <div className={styles.header}>
      <Link className={styles.title} to="/">
        TODO
      </Link>
      <i aria-hidden="true">
        <FiSun />
      </i>
    </div>
  );
}

export default Header;
