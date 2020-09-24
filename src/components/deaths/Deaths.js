import React from 'react';
import { Link } from 'react-router-dom';


class Deaths extends React.Component {

    render (){
   
        return (
            <div>
                <div id='death-row' className='row'>
                {this.props.deaths && this.props.deaths.map(death =>
                    <div id='death-card' className='col-md-6' key={death.id}>
                    <h3>Rest In Peace</h3>
                    <img src='' alt='card-bkgnd'/><br></br>
                    <Link to={`/deaths/${death.id}`}>{death.attributes.person}</Link>
                    </div>
                )}
                </div>
            </div>
        )
    }
}



export default Deaths;