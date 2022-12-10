import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import Dashboard from './Components/Dashboard/Dashboard';
import Landingpage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import ErrorPage from './ErrorPage';
import { AuthContext } from './Firebase/FirebaseAuthContext';

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
  const userContext = useContext(AuthContext);

  if (!userContext.state) {
    return <Login />;
  }

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
