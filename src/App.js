import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloworld = 'Welcome to React';
    return (
      <div className="App">
        <h2>{helloworld}</h2>
        <User/>
      </div>     
    );
  }
}

class User extends Component {
  render() {
    const firstName='JuYeol';
    const secondName='An';

    return (      
        <h>{firstName} {secondName}</h>    
    );
  }
}

export default App;
