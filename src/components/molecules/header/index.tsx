import "./style.css";
import { FiSun } from "react-icons/fi";

function Header() {
  return (
    <div className="header">
      <h1 className="title">TODO</h1>
      <i aria-hidden="true">
        <FiSun />
      </i>
    </div>
  );
}

export default Header;
