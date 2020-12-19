import React from 'react';
import { Link } from 'react-router-dom';
class Deaths extends React.Component {
 
    render (){
        console.log(this.props.deaths)
        return (
            <div className="card-deck">
                {this.props.deaths && this.props.deaths.map(death =>
                <div className="card" key={death.id}>
                <img height='250px' src={process.env.PUBLIC_URL + '/images/gravestone.png'} alt='card-bkgnd'/><br></br>
                <div className="card-body">
                  <h5 className="card-title">Rest in Peace</h5>
                  <button className="btn btn-secondary"><Link to={`/deaths/${death.id}`}>{death.attributes.person}</Link></button>
                <p className="card-text"><small className="text-muted">{death.attributes.date}</small></p>
                </div>
                </div>
                )}
            </div>
        )
    }
}



export default Deaths;


  