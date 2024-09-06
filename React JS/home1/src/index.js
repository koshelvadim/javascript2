import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Message from './components/Message/Message';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Message
      data={{
        title: "Title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ad?",
      }}
    />
    <Message
      data={{
        title: "Title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ad?",
      }}
    />
    <Message
      data={{
        title: "Title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ad?",
      }}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
