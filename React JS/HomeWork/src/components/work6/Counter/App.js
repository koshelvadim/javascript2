import ButtonMinus from "./components/ButtonMinus.js";
import ButtonPlus from "./components/ButtonPlus.js";
import CounterComponent from "./components/CounterComponent";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CounterComponent />
        <ButtonPlus />
        <ButtonMinus />
      </div>
    </Provider>
  )
}

export default App;
