// import logo from "./logo.svg";
import "./App.css";
import GetCount from "./componetnts/counter";
import CurrentTime from "./componetnts/CurrentTime/CurrentTime";
import EventCard from "./componetnts/EventCard/EventCard";
import Greeting from "./componetnts/Greeting/Greeting";
import SetTimer from "./componetnts/SetTimer/SetTimer";
import TextInput from "./componetnts/TextInput/TextInput";
import TodoList from "./componetnts/TodoList/TodoList";
import Show from "./componetnts/visible";

function App() {
  return (
    <header>
      <div className="App">

        {/* <GetCount data="1" />

        <GetCount data="2" />

        <Show />

        <CurrentTime />

        <Greeting />

        <div className="card">
          <EventCard
            card={{
              title: "Встреча выпускников",
              date: "10.10.2024",
              place: "г.Москва",
            }}
          />
          <EventCard
            card={{
              title: "Годовщина свадьбы",
              date: "10.12.2024",
              place: "г.Пушкин",
            }}
          />
          <EventCard
            card={{
              title: "Деловая встреча",
              date: "24.12.2024",
              place: "г.Санкт-Петербург",
            }}
          />
        </div>

        <TextInput />

        <TodoList /> */}

        <SetTimer />

      </div>
    </header>
  );
}

export default App;
