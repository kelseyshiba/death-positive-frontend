import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DeathsContainer from './containers/DeathsContainer';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <h1 className='text-center'>Death Positive +</h1>
        <hr/>
        <DeathsContainer />
      </div>
    );
  }
}

export default App