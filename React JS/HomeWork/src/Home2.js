import { useState } from "react";
import "./App.css";
import PostList from "./components/home2/PostList/PostList";
import PostForm from "./components/home2/PostForm/PostForm";

function Home2() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Встреча", body: "Деловая встреча по работе" },
    { id: 2, title: "День рождения", body: "Мой день рождения" },
    { id: 3, title: "Юбилей", body: "Годовщина свадьбы" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="container direction-column">
      <PostForm create={createPost} title={"Форма ввода постов:"} />
      <PostList remove={removePost} posts={posts} title={"Список постов:"} />
    </div>
  );
}

export default Home2;
