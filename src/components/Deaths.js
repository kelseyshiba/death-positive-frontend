import React from 'react';
import { connect } from 'react-redux';
import Death from './Death';

class Deaths extends React.Component {
    handleDelete = (id) => {
        this.props.deleteDeath(id)
    }

    render (){
        console.log('in Deaths Container', this.props.deaths)
        return (
            <div>
                <div id='death-row' className='row'>
                {this.props.deaths && this.props.deaths.map(death =>
                    <div id='death-card' className='col-md-6' key={death.id}><Death handleDelete={this.handleDelete} deathId={death.id} death={death.attributes}/></div>
                )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        deaths: state.deaths
    }
}

export default connect(mapStateToProps)(Deaths)