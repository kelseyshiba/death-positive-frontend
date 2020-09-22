import React from 'react';
import { connect } from 'react-redux';
import DeathForm from '../components/DeathForm'
import { createDeath } from '../actions/deathActions';
import Deaths from '../components/Deaths';
import { fetchDeaths } from '../actions/fetchDeaths';
import { deleteDeath } from '../actions/deathActions';

class DeathsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDeaths()
    }

    render (){
        return(
            <div>
                <h2 className='text-center'>Who's Dying?</h2>
                <DeathForm createDeath={this.props.createDeath}/>
                <Deaths deleteDeath={this.props.deleteDeath}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDeath: (death) => 
            dispatch(createDeath(death)),
        fetchDeaths: () => dispatch(fetchDeaths()),
        deleteDeath: (id) => dispatch(deleteDeath(id))
    }
}


export default connect(null, mapDispatchToProps)(DeathsContainer)