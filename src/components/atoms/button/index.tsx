import styles from "./style.module.css";

type ButtonType = "button" | "submit" | "reset" | undefined;

interface AllBtnProps {
  id?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: ButtonType;
}

function Button({ id, className, children, onClick, type }: AllBtnProps) {
  return (
    <>
      <button
        type={type}
        id={id}
        className={styles.button + " " + className}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
