import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatManager from './ChatManager';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enableChat: false,
    };
  }

  render() {
    const { enableChat } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <button onClick={() => this.setState({ enableChat: true })}>Mount Chat component</button>
        <button onClick={() => this.setState({ enableChat: false })}>Unmount Chat component</button>

        { (enableChat) ? <ChatManager /> : null }
      </div>
    );
  }
}

export default App;
