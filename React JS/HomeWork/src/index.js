import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
// import Home1 from "./Home1";
// import Home2 from "./Home2";
// import Home3 from "./Home3";
import reportWebVitals from "./reportWebVitals";
import App71 from "./components/home71/App71";
// import Work1 from "./Work1";
// import Work2 from "./Work2";
// import Work3 from "./Work3";
// import Work4 from "./Work4";
// import Routing from "./components/work4/Routing/Routing";
// import Box from "./components/work4/Children/Box";
// import List from "./components/work4/RenderListFunction/List";
// import Rout from "./components/work4/RouterPages/Rout";
// import Home4 from "./Home4";
// import App from "./components/work6/Counter2/App";
// import App from "./components/home6/ProductCatalog/App";
// import App from "./components/home5/App";
// import AppRedux from "./components/work8/App";
// import AppHome7 from "./components/home7/AppHome7";
// import  store from "./components/work7-1/store/store"
// import AppWork71 from "./components/work7-1/App";
// import AppHome7 from "./components/home7/AppHome7";
// import AppWork8 from "./components/work8/AppWork8";
import store from "./components/home71/redux/store";
// import AppWork81 from "./components/work8-1/AppWork81";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const renderItem = (list) => {
//   return (
//     list.map(item => <li key={item.id}>{item.title}</li>)
//   )
// }

root.render(
  <React.StrictMode>
    {/* <Work1 /> */}
    {/* <Work2 /> */}
    {/* <Work3 /> */}
    {/* <Work4 /> */}
    {/* <Routing /> */}
    {/* <Home1 /> */}
    {/* <Home2 /> */}
    {/* <Home3 /> */}
    {/* <Home4 /> */}

    {/* <Box title="1. Children"><h3>Привет React!</h3></Box>
    <Box title="2. Children"><h3>Привет JavaScript!</h3></Box>  */}

    {/* <List renderItem={renderItem}/> */}

    {/* <Rout /> */}
    {/* <Provider store={store}>
      <AppWork71 />
    </Provider> */}
    {/* <AppRedux /> */}
    {/* < AppHome7 /> */}
    {/* <Provider store={store}>
      <AppWork8/>
    </Provider> */}
    <Provider store={store}>
      <App71 />
    </Provider>

    {/* <AppWork81 /> */}
  </React.StrictMode>
);

reportWebVitals();
