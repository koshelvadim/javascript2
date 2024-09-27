import React from 'react'
import {Provider} from "react-redux"
import { store } from './store/store'
import TasksList from './components/TasksList'

const AppHome7 = () => {
  return (
    <Provider store={store}>
      <TasksList />
    </Provider>
  )
}

export default AppHome7