import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Session from './components/Session';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/session' component={Session}/>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
