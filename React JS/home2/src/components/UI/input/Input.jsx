import style from "./input.module.css";

function Input(props) {
    return ( <input className={style.input} {...props}/> );
}

export default Input;