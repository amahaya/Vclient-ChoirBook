import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./features/auth/LoginPage";
import { AuthContext } from "./context/authContext";
import Homepage from "../src/features/home/Homepage";
import ProfilePage from "./features/profile/ProfilePage";
import Navbar from "./features/nav/Navbar";

function Layout(props) {
  return (
    <div>
      {" "}
      <Navbar />
      <Route path={props.match.url + "/profil"} component={ProfilePage} />{" "}
      <Route path={props.match.url + "/home"} component={Homepage} />{" "}
    </div>
  );
}

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Route exact path="/" component={LoginPage} />
        <Route path="/choirbook" component={Layout} />

        <Route exact path="/toto" component={() => <h1>toto</h1>} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
