import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';
import WeatherTable from './containers/WeatherTable';

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='row' >
          <SearchBar />
        </div>
        <div className='row'>
          <WeatherTable />
        </div>
      </div>
    );
  }
}

export default App;
