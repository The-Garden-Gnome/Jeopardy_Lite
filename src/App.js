import React from 'react';
import { Route } from 'react-router-dom'
import { Switch } from "react-router-dom";
import './App.css';
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Error from "./components/error/Error";



function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route 
      exact 
      path="/" 
      render={(props) => <Welcome {...props} name="Samantha" />} 
      />
      <Route path="/welcome/:name" 
      render={(props) => <Welcome {...props} name={props.match.params.name} />} />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
