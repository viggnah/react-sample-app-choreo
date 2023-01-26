import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
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
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/about",
    element: <div>About</div>,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/app",
    element: <App/>,
    errorElement: <ErrorBoundary />,
  }
], {
  basename: "/vhsy/react-app-with-serve/1.0.0/",
});

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>
            <h1>Dang! This path is not valid.!</h1>
            <Link to="app">Navigate to app</Link>
          </div>;
}

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
