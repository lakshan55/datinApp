import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./components/screens/LoginScreen"
import Main from "./components/main/Main"
import './styles/styles.css';


function App() {
  return (
    <Router>
     
      <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <LoginScreen
                    {...props}
                   
                  />
                )}
              />
              <Route
                
                path="/dashboard"
                render={(props) => <Main {...props} />}
              />
               </Switch>
    </Router>
  );
}

export default App;
