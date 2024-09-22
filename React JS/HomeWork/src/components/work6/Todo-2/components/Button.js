const Button = ({ children, handlerClick= () => {} }) => {    //значение по умолчанию
  return (
    <button onClick={handlerClick}>{children}</button>
  );
}

export default Button;