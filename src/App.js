import React, { Component } from 'react';
import Home from "./components/pages/Home";
import Report from "./components/pages/Report";
import Alert from "./components/pages/Alert";

import NavTabs from "./components/NavTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavTabs />
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/map" component={Home}/>
        <Route exact path= "/get-alerts" component={Alert}/>
        <Route exact path = "/report" component = {Report}/>
      </div>
      </Router>
    );    
    }
}

export default App;
