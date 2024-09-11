import TemperatureConverter from "./components/home3/TemperatureConverter/TemperatureConverter";
import "./App.css";
import ToDoList from "./components/home3/TodoList/TodoList";

function Home3() {
  return (
    <>
      <div className="container box">
        <h2>Задание 1: Температурный конвертер с Material UI</h2>
        <TemperatureConverter />
      </div>
      <div className="container box">
        <h2>Задание 2: Список дел с Material UI</h2>
        <ToDoList />
      </div>
    </>
  );
}

export default Home3;
