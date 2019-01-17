import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './component/head';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './page/home';
import Pelatihan from './page/pelatihan';
import { BrowserRouter as Router, Redirect ,Route,Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar></Navbar>
        {(<Route path={`/home`} component={Home}/> || <Route path={`/`} component={Home}/>)}
        <Route path={'/pelatihan'} component={Pelatihan}/>
        <Footer></Footer>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
