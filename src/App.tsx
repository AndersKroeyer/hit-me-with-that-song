import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import Dashboard from './Components/Dashboard/Dashboard';
import Landingpage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <Router basename="/hit-me-with-that-song">
        <div>
          <Switch>
            <Route exact path="/control-panel">
              <ControlPanel />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Landingpage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
