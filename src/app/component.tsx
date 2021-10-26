import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import PhotosPage from "./PhotosPage";

import "./style.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <PhotosPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
