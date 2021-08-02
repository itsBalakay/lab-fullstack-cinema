import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Link, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import SingleMovies from "./components/SingleMovies";
import NewMovies from "./components/NewMovies";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/movies" render={(props) => <Movies {...props} />} />
        <Route
          exact
          path="/movie/:id"
          render={(props) => <SingleMovies {...props} />}
        />
        <Route exact path="/newmovie" render={(props) => <NewMovies />} />
      </Switch>
    </div>
  );
}

export default App;
