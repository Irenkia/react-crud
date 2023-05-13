import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tutorial from "./components/Tutorial";
import AddTutorial from "./components/AddTutorial";
import TutorialsList from "./components/TutorialsList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            MyApp
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
