interface AllBtnProps {
  id?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({ id, className, children, onClick }: AllBtnProps) {
  return (
    <>
      <button id={id} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
