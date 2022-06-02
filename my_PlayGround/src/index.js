import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from './app/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Provider store={store}><App /></Provider>);




// import React from "react";
// import ReactDOM from "react-dom";
// import store from "../src/Workbox/redux/store";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";

// import "./index.css";
// import Secured from "./Secured";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
