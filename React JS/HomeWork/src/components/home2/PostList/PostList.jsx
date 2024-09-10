import PostItem from "../PostItem/PostItem";
import style from "./postList.module.css";

function PostList({posts, title, remove}) {
    return ( 
        <div className={style.post__list}>
            <h3 className="center">{title}</h3>
            {posts.map((post, index) => <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>)}
        </div>
     );
}

export default PostList;