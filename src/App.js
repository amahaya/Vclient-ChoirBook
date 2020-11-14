import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import LoginPage from "./features/auth/LoginPage";

function App(props) {
  return (
    <>
      <Route exact path="/" component={LoginPage} />
    </>
  );
}

export default App;
