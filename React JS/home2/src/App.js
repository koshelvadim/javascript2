import { useState } from "react";
import "./app.css";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Встреча", body: "Деловая встреча по работе" },
    { id: 2, title: "День рождения", body: "Мой день рождения" },
    { id: 3, title: "Юбилей", body: "Годовщина свадьбы" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="container">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title={"Список постов:"} />
    </div>
  );
}

export default App;
