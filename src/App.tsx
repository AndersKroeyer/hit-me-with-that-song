import { basename } from 'path';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import Dashboard from './Components/Dashboard/Dashboard';
import Landingpage from './Components/LandingPage/LandingPage';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Landingpage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/control-panel',
      element: <ControlPanel />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: '/hit-me-with-that-song',
  },
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
