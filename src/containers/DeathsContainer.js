import React from 'react';
import { connect } from 'react-redux';
import DeathForm from '../components/DeathForm'
import { createDeath } from '../actions/deathActions';
import Deaths from '../components/Deaths'

class DeathsContainer extends React.Component {
    render (){
        return(
            <div>
                <h2 className='text-center'>Who's Dying?</h2>
                <DeathForm createDeath={this.props.createDeath}/>
                <Deaths />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDeath: (death) => {
            dispatch(createDeath(death))
        }
    }
}

export default connect(null, mapDispatchToProps)(DeathsContainer)