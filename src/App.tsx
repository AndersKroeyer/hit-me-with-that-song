import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/control-panel">
              <ControlPanel />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
