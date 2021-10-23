
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Homepage/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Shared/Header/Header';
import Specialists1 from './Components/Specialists1/Specialists1';


function App() {
  return (
    <div className="App">
     <Router>
     <Header></Header>
       <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/specialist'>
          <Specialists1></Specialists1>
        </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
