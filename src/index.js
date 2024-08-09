import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppReactHooks from './AppReactHooks';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppReactHooks />}>
      {/* <Route path="dashboard" element={<SayHello />} /> */}
      {/* <Route path="learnhooks" element={<SayHello />} /> */}
      {/* ... etc. */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
