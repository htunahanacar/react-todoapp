import Button from "../../atoms/Button";
import styles from "./style.module.css";

interface PopupProps {
  popupText: string | undefined;
  handleClosePopup: () => void;
}

export const Popup = ({ popupText, handleClosePopup }: PopupProps) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupBody}>
        <div className={styles.popupContent}>
          <h1 className={styles.h1}>{popupText}</h1>
          <Button onClick={handleClosePopup}>I got it!</Button>
        </div>
      </div>
    </div>
  );
};
