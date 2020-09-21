import React from 'react';
import { connect } from 'react-redux';
import Death from './Death';

class Deaths extends React.Component {
    render (){
        console.log(this.props.deaths.map(death => death))
        return (
            <div className='container'>
                <ul>
                {this.props.deaths.map(death =>
                    <li key={death.id}><Death death={death}/></li>
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