import React from 'react';
import { connect } from 'react-redux';
import Deaths from '../components/Deaths';
import { fetchDeaths } from '../actions/fetchDeaths';
import { deleteDeath } from '../actions/deathActions';
import { Route } from 'react-router-dom';
import DeathForm from '../components/DeathForm';
import Death from '../components/Death';

class DeathsContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchDeaths()
    }
    

    render (){
     
        return(
            <div>
                <Route exact path='/deaths/new' component={DeathForm}/>
                <Route path='/deaths/:id' render={routerProps => <Death {...routerProps} deaths={this.props.deaths} deleteDeath={this.props.deleteDeath} />} />
                <Route exact path='/deaths' render={routerProps => <Deaths {...routerProps} deaths={this.props.deaths} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDeaths: () => dispatch(fetchDeaths()),
        deleteDeath: (id) => dispatch(deleteDeath(id))
    }
}
//when reducing this do I still pass id?

const mapStateToProps = state => {
    return {
        deaths: state.deaths
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeathsContainer)