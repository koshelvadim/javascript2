import PropTypes from "prop-types";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import MessageList from "./components/MessageList";
import { useState } from "react";


function App() {
  const [posts] = useState([
    { id: 1, title: "Встреча" },
    { id: 2, title: "День рождения" },
    { id: 3, title: "Юбилей" },
  ]);

  return (
    <div className="App">
      <Greeting name="Nik" age={34} flag={true} />
      <Counter />
      <MessageList posts={posts} />
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  flag: PropTypes.bool, // проверка типа переменной библиотекой npm i prop-types
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default App;
