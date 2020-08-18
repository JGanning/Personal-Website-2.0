import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

//Components
import NavComponent from "./Components/Nav/NavComponent";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import MusicRoom from "./Components/MusicRoom/MusicRoom";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Skills from "./Components/Skills/Skills";

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
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/music-room" component={MusicRoom} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/skills" component={Skills} />
            </div>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
