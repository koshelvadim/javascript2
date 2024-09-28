import React from "react";
import GistList from "./components/GistList";

function AppWork81() {
  return (
    //обертка для всего приложения
    <div className="App">
      Шапка приложения с заголовков
      <header className="App-header">
        <h1>Список Gists с Github</h1>
      </header>
      Основная часть приложения, где будет отображаться список Gists
      <main>
        <GistList />
      </main>
    </div>
  );
}

export default AppWork81;
