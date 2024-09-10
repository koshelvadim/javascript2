import Button from "../UI/button/Button";
import "./postItem.css";

function PostItem(props) {
    return ( 
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btn">
                <Button onClick={() => props.remove(props.post)}>Удалить</Button>
            </div>
        </div>
     );
}

export default PostItem;