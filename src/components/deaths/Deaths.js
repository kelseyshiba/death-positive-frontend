import React from 'react';
import { Link } from 'react-router-dom';


class Deaths extends React.Component {

    render (){
        console.log('deaths', this.props.deaths)
        return (
            <div className='row'>
                {this.props.deaths && this.props.deaths.map(death =>
                    <div id='death-card' className='col-md-6' key={death.id}>
                    <h3>Rest In Peace</h3>
                    <img height='125px' src={process.env.PUBLIC_URL + '/images/gravestone.jpeg'} alt='card-bkgnd'/><br></br>
                    <Link to={`/deaths/${death.id}`}>{death.attributes.person}</Link>
                    </div>
                )}
            </div>
        )
    }
}



export default Deaths;