import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/support",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="app">Navigate to app</Link>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/app",
    element: <App/>,
  }
], {
  basename: "/vhsy/react-app-with-serve/1.0.0/",
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
