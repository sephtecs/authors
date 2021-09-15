import logo from './logo.svg';
import './App.css';
import Homepage from './components/HomePage';
import ListAll from './components/ListAll';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/edit/:id/">
            <EditAuthor />
          </Route>
          <Route exact path="/authors/new">
            <NewAuthor />
          </Route>
          <Route exact path="/">
            <Homepage />
            <ListAll />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
