import React, { Component } from 'react';
import logo from 'images/logo.svg';
import s from 'styled-components';

const SApp = s.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <SApp>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </SApp>
    );
  }
}

export default App;
