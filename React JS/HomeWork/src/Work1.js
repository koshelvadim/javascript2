import GetCount from "./components/work1/counter";
import CurrentTime from "./components/work1/CurrentTime/CurrentTime";
import EventCard from "./components/work1/EventCard/EventCard";
import Greeting from "./components/work1/Greeting/Greeting";
import SetTimer from "./components/work1/SetTimer/SetTimer";
import TextInput from "./components/work1/TextInput/TextInput";
import TodoList from "./components/work1/TodoList/TodoList";
import Show from "./components/work1/visible";

function Work1() {
  return (
    <header>
      <div className="container">
        <GetCount data="1" />

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

        <TodoList />

        <SetTimer />
      </div>
    </header>
  );
}

export default Work1;
