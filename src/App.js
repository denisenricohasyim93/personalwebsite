import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Window
          color={this.props.color}
          theme={this.props.theme}
          chrome
          height="300px"
          padding="12px"
        >
          <TitleBar title="My Windows Application" controls/>
          <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
        </Window>
      </div>
    );
  }
}

export default App;
