import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';


function App() {
  return (
    <div>
     <Router>
       <Switch>
            <Route exact path="/">
              <SignUp />
            </Route>

            <Route exact path="/login">
              <LogIn />
            </Route>

            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

              </Switch>
      </Router>


    </div>
  );
}

export default App;
