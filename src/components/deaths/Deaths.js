import React from 'react';
import { Link } from 'react-router-dom';


class Deaths extends React.Component {

    render (){
        console.log('deaths', this.props.deaths)
        return (
            <div class="card-deck">
                {this.props.deaths && this.props.deaths.map(death =>
                <div class="card" key={death.id}>
                <img height='250px' src={process.env.PUBLIC_URL + '/images/gravestone.png'} alt='card-bkgnd'/><br></br>
                <div class="card-body">
                  <h5 class="card-title">Rest in Peace</h5>
                  <button class="btn btn-secondary"><Link to={`/deaths/${death.id}`}>{death.attributes.person}</Link></button>
                <p class="card-text"><small class="text-muted">{death.attributes.date}</small></p>
                </div>
                </div>
                )}
            </div>
        )
    }
}



export default Deaths;


  