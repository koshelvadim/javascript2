import React from 'react'
import { Theme } from './Theme/Theme'
import { Provider } from 'react-redux'
import { store } from './store/store'
import "./App.css";

const App = () => {
  return (
    <Provider store={store}> {/* все оборачиваем в Provider и передаем store */}
       <Theme />
    </Provider>
  )
}

export default App