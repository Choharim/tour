import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import HomePage from "pages/Home/index";

const App = () => {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    font-family: "Stylish", sans-serif;
  }

  body {
    box-sizing: border-box;
  }
  a {
    text-decoration:none;
    color:black;
    &:hover {
      color:black;
    }
    &:visited {
      color:black;
    }
  }
`;
