import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact to="/">
            <Home/> 
          </Route>
          <Route to="/home">
            <Home/> 
          </Route>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
