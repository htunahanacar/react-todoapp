// 1.3. FilterBtns

import Button from "../../atoms/button";
import "./style.css";

function FilterBtns() {
  return (
    <>
      <div className="filter-btns">
        <Button id="all-btn" className="focused">
          All
        </Button>
        <Button id="active-btn" className="unfocused">
          Active
        </Button>
        <Button id="completed-btn" className="unfocused">
          Done
        </Button>
      </div>
    </>
  );
}

export default FilterBtns;
