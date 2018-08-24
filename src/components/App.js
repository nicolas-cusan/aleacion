import React, { Component } from 'react';
import s from 'styled-components';

import SoundList from 'components/SoundList';

const SApp = s.div`

`;

class App extends Component {
  render() {
    return (
      <SApp>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SoundList />
      </SApp>
    );
  }
}

export default App;
