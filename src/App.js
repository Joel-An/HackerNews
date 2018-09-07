import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

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
