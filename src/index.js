import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sections from './Sections/Sections';
import Add from './Add/Add';
import Detail from './Detail/Detail';
import Basket from './Basket/Basket';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Sections/>,
      },
      {
        path: 'add',
        element: <Add/>,
      },
      {
        path: 'detail/:productID',
        element: <Detail/>,
      },
      {
        path: 'basket',
        element: <Basket/>,
      },

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


