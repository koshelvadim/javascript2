import s from "./message.module.css"

function Message({data}) {
    return ( 
    <div className={s.box}>
        <h2 className={s.title}>{data.title}</h2>
        <p className={s.text}>{data.text}</p>
    </div>
     );
}

export default Message;