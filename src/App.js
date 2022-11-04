import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import MyInfo from "./myInfo";

function App() {
  return (
    <div className="border">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Fragment>
          <MyInfo
            id="101336669"
            fname="Mohsen"
            lname="Ghaffari"
            college="George Brown College"
            city="Toronto"
          />
        </Fragment>
      </header>
    </div>
    </div>
  );
}

export default App;
