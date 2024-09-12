function Message(props) {

    return ( 
        <p>{props.number}. {props.post.title}</p>
    );
}

export default Message;