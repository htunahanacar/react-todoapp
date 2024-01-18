import styles from "./style.module.css";

type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  id?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: ButtonType;
}

function Button({ id, className, children, onClick, type }: ButtonProps) {
  return (
    <button
      type={type}
      id={id}
      className={styles.button + " " + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
