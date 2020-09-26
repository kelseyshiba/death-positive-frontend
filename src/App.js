import React from 'react';
//import logo from './logo.svg';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Home from './containers/Home';
import DeathsContainer from './containers/DeathsContainer';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <div id='header' className='text-center'><h1>Death Positive +</h1></div>
        <hr/>
        <NavBar />
        <hr/>
        <Route exact path="/" component={Home}/> 
        <DeathsContainer/>
      </div>
    );
  }
}

export default App