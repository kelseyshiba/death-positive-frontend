import React from 'react';
import { connect } from 'react-redux';
import Death from './Death';

class Deaths extends React.Component {
    render (){
        return (
            <div className='container'>
                <ul>
                {this.props.deaths && this.props.deaths.map(death =>
                    <li key={death.id}><Death props={death}/></li>
                )}
                </ul>
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