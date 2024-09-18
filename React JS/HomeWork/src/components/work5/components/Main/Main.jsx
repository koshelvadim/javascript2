import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useTheme } from "../../contexts/ThemeContext";

import lightImg from "./DzUGCAPzT0WL7LD7WtFDgA.webp";
import darkImg from "./bPUfv7LIR_C9rQryKQSJaw.webp";
import { Counter } from "../Counter/Counter";
import { useDispatch } from "react-redux";
import {
  updateEmail,
  updateName,
  updateNameAndEmail,
} from "../../store/userReducer";
import withLoadingIndicator from "../withLoadingIndicator/withLoadingIndicator";

const Main = ({data}) => {
  const { setUsername } = useContext(UserContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const { theme, toggleTheme } = useTheme();

  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      dispatch(updateNameAndEmail({ name, email }));
    } else if (name.trim()) {
      dispatch(updateName(name));
    } else if (email.trim()) {
      dispatch(updateEmail(email));
    }
    setName("");
    setEmail("");
  };

  return (
    <main className="">
      <p>{data}</p>
      <form
        onSubmit={handlerSubmit}
        style={{ background: "#ccc", padding: "20px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit">Отправить</button>
      </form>

      <button onClick={() => setUsername(prompt("Напишите своё имя", "Макс"))}>
        Сменить имя
      </button>

      <button
        className={`btn-${theme === "light" ? "light" : "dark"}`}
        onClick={toggleTheme}>
        Сменить тему
      </button>
      <Counter />
      {theme === "light" ? <img src={lightImg} alt="light" /> : <img src={darkImg} alt="dark" />}
    </main>
  );
};

const MainWithLoading = withLoadingIndicator(Main);

export default MainWithLoading;