import React from 'react'
import { Provider } from "react-redux";
import store from './redux/store';
import Counter2 from './components/Counter2';

const App = () => {

  return (
    <Provider store={store}>
      <Counter2 />
    </Provider>
  );
}

export default App