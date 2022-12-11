import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import Dashboard from './Components/Dashboard/Dashboard';
import Landingpage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import ErrorPage from './ErrorPage';
import { auth } from './Firebase/Firebase';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && !userContext.state) {
        userContext.update({ user, extraProp: 'Logged in' });
      } else {
        userContext.update(null);
      }
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div />;
  }

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
