import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Teachers from './Components/Routes/Teachers';
import Pupils from './Components/Routes/Pupils';
import Subjects from './Components/Routes/Subjects';
import MainPage from './MainPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <MainPage /> },
        { path: 'signin', element: <Login /> },
        { path: 'teachers', element: <Teachers /> },
        { path: 'pupils', element: <Pupils /> },
        { path: 'subjects', element: <Subjects /> },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
