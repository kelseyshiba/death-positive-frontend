import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import DeathsContainer from './containers/DeathsContainer';
import Home from './containers/Home';

class App extends React.Component {
  
  render(){
    return (
      <Router>
      <div className="App">
        <header id='header' className='text-center'><h1>Death Positive +</h1></header>
        <hr/>
        <NavBar />
        <hr/>
        <Route exact path="/" render={() => <Home/>} />
        <Route path='/deaths' render={routerProps => <DeathsContainer {...routerProps}/>} />
      </div>
      </Router>
    );
  }
}

export default App