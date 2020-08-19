import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, BrowserRouter } from "react-router-dom";

//Components
import NavComponent from "./Components/Nav/NavComponent";
import Routes from "./routes";

//Styles
import { bootstrap } from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <div className="row no-margin no-padding">
            <div className="col-lg-2 no-padding">
              <NavComponent />
            </div>

            <div className="main col-lg-10 no-padding">
              <Routes />
            </div>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
