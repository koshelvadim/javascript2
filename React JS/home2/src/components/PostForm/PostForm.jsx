import { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import style from "./postForm.module.css";

function PostForm({create, title}) {

    const [post, setPost] = useState({title: '', body: ''});
    const [error, setError] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        console.log(post.title);
        if (post.title.trim() !== '' && post.body.trim() !== '') {
            const newPost = {...post, id: Date.now()};
            create(newPost);
            setPost({title: '', body: ''}); 
            setError('');
        } else {
            setError('Поле не может быть пустым!');
            setPost({title: '', body: ''}); 
        } 
    };

    return ( 
    <form className={style.post__form}>
      <h3 className={style.post__title}>{title}</h3>
        <Input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <Input
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <Button onClick={addNewPost}>Создать пост</Button>
        <p className={style.post__error}>{error}</p>
      </form>
       );
}

export default PostForm;