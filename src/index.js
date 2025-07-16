import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";

import BoardProvider from './Contexts/Board';
import ListProvider from './Contexts/List';
import TaskProvider from './Contexts/Task';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    //<App />
    <BoardProvider>
      <ListProvider>
        <TaskProvider>
          <RouterProvider router={router}/>
        </TaskProvider>
      </ListProvider>
    </BoardProvider>,
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
