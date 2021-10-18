import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import MoviesComponent from "./components/MoviesComponent";
import BooksComponent from "./components/BooksComponent";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <MoviesComponent />
        </Route>
        <Route path="/books">
          <BooksComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
