import PropTypes from "prop-types";
import "./App.css";
import Greeting from "./components/work2/Greeting";
import Counter from "./components/work2/Counter";
import MessageList from "./components/work2/MessageList";
import { useState } from "react";

function Work2() {
  const [posts] = useState([
    { id: 1, title: "Встреча" },
    { id: 2, title: "День рождения" },
    { id: 3, title: "Юбилей" },
  ]);

  return (
    <div className="container">
      <Greeting name="Nik" age={34} flag={true} />
      <Counter />
      <MessageList posts={posts} />
    </div>
  );
}

export default Work2;
