import Message from "./Message";

function MessageList({posts}) {

    return ( 
        <div>
            {posts.map((post, index) => <Message number={index + 1} post={post} key={post.id}/>)}
        </div>
     );
}

export default MessageList;