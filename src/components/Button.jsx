function Button({ children, style }) {
  return (
    <button className={style} type="button">
      {children}
    </button>
  );
}

export default Button;
