import React from 'react';
import { connect } from 'react-redux';
import Deaths from '../components/deaths/Deaths';
import { fetchDeaths } from '../actions/fetchDeaths';
import { deleteDeath } from '../actions/deathActions';
import { Route, Switch } from 'react-router-dom';
import DeathForm from '../components/deaths/DeathForm';
import Death from '../components/deaths/Death';
import ContactsContainer from '../components/ceremonies/ContactsContainer';

class DeathsContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchDeaths()
    }
    

    render (){
  console.log('in death container new state', this.props.deaths)
        return(
            <div>
                <Switch>
                    <Route exact path='/deaths/new' component={DeathForm}/>
                    <Route path='/deaths/:id' render={routerProps => <Death {...routerProps} deaths={this.props.deaths} deleteDeath={this.props.deleteDeath} />} />
                    <Route exact path='/deaths' render={routerProps => <Deaths {... routerProps} deaths={this.props.deaths} />} />
                    <Route path='/ceremonies/:id/contacts' render={routerProps => <ContactsContainer {...routerProps} />} />
                </Switch>
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