import React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import MusicLounge from "./Components/MusicLounge/MusicLounge";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Skills from "./Components/Skills/Skills";
import Experiments from "./Components/Experiments/Experiments";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/bio" component={About} />
    <Route path="/experiments" component={Experiments} />
    <Route path="/music-lounge" component={MusicLounge} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/skills" component={Skills} />
  </Switch>
);

export default Routes;
