import style from './button.module.css';

function Button({children, ...props}) {
    return ( 
    <button {...props} className={style.btn}>
        {children}
    </button>
 );
}

export default Button;