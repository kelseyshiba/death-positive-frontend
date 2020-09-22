import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import DeathsContainer from './containers/DeathsContainer';

class App extends React.Component {
  
  render(){
    return (
      <Router>
      <div className="App">
        <h1 className='text-center'>Death Positive +</h1>
        <hr/>
        <NavBar />
        <hr/>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route path='/deaths' render={routerProps => <DeathsContainer {...routerProps}/>} />
      </div>
      </Router>
    );
  }
}

export default App