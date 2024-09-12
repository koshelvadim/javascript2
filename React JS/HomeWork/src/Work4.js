import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Work4() {
  const [posts, setPosts] = useState([
    { id: 1, title: "iphone", body: "15 pro max" },
    { id: 2, title: "samsung", body: "s24 ultra" },
    { id: 3, title: "nokia", body: "nokia 3310" },
    { id: 4, title: "xiomi", body: "14 ultra" },
  ]);

  const [error, setError] = useState("d-none");

  const inputTitleRef = useRef();
  const inputBodyRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    const inputTitle = inputTitleRef.current.value;
    const inputBody = inputBodyRef.current.value;
    if (inputTitle.trim() !== "" && inputBody.trim() !== "") {
      setError('d-none');
      const newPost = {
        id: Date.now(),
        title: inputTitle,
        body: inputBody,
      };
      setPosts([...posts, newPost]);
      inputTitleRef.current.value = "";
      inputBodyRef.current.value = "";
    } else {
      setError("");
      return;
    }
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h3 className="text-center">Форма ввода задач:</h3>
          </Col>
        </Row>
        <Row>
          <InputGroup className="mb-1">
            <InputGroup.Text>введите тему</InputGroup.Text>
            <Form.Control ref={inputTitleRef} aria-label="First name" />
          </InputGroup>

          <InputGroup className="mb-1">
            <InputGroup.Text>введите описание</InputGroup.Text>
            <Form.Control ref={inputBodyRef} aria-label="Last name" />
          </InputGroup>
          <Row>
            <h5 className={error}>Поля заполнены не корректно!</h5>
          </Row>
          <Col>
            <Button variant="success" onClick={addNewPost}>
              создать
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <h3 className="text-center">Лист постов:</h3>
        </Row>
        <Row className="justify-content-center">
          {posts.map((post, index) => (
            <Card key={post.id} style={{ width: "18rem" }}>
              <Card.Body>
                <h3>{index + 1}. Пост</h3>
                <Card.Title>Title: {post.title}</Card.Title>
                <Card.Text>Body: {post.body}</Card.Text>
                <Button variant="danger" onClick={() => deletePost(post)}>
                  Удалить пост
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Work4;
