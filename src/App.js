import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchDeaths } from './actions/fetchDeaths';
import DeathsContainer from './containers/DeathsContainer';
import DeathForm from './components/DeathForm'

class App extends React.Component {
  
  componentDidMount (){
    this.props.fetchDeaths()
  }

  render(){
    return (
      <div className="App">
        <h1 className='text-center'>Death Positive +</h1>
        <hr/>
        <DeathsContainer />
        <DeathForm />
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     deaths: state.deaths
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    fetchDeaths: () => dispatch(fetchDeaths())
  }
}
export default connect(null, mapDispatchToProps)(App)