import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var helloworld = 'Welcome to React';
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
    var firstName='JuYeol';
    var secondName='An';

    return (      
        <h>{firstName} {secondName}</h>    
    );
  }
}

export default App;
