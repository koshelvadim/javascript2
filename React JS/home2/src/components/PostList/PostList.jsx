import PostItem from "../PostItem/PostItem";

function PostList({posts, title, remove}) {
    return ( 
        <div>
            <h3 className="center">{title}</h3>
            {posts.map((post, index) => <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>)}
        </div>
     );
}

export default PostList;