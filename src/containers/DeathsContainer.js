import React from 'react';
import { connect } from 'react-redux';
import Deaths from '../components/Deaths';
import { fetchDeaths } from '../actions/fetchDeaths';
import { deleteDeath } from '../actions/deathActions';


class DeathsContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchDeaths()
    }

    render (){
        console.log('in Death Container', `${this.props.match.url}/new`)
        return(
            <div>
                {/* <DeathForm createDeath={this.props.createDeath}/> */}
                <Deaths deleteDeath={this.props.deleteDeath}/>
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


export default connect(null, mapDispatchToProps)(DeathsContainer)