import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const Home = () => {
    return(
        <div>
            <p>The death-positive movement is a social and philosophical movement that encourages people to speak openly about death, dying, and corpses. The movement seeks to eliminate the silence around death-related topics, decrease anxiety surrounding death, and encourages more diversity in end of life care options available to the public. <a href='https://en.wikipedia.org/wiki/The_Order_of_the_Good_Death#:~:text=Death%20positivity%20was%20popularized%20by,death%2C%20dying%2C%20and%20corpses.&text=It%20also%20encourages%20people%20to%20express%20their%20feelings%20about%20death%20through%20art.'> Wiki Source</a>
            </p>
            <br></br>
            <div id='home' className='row'>
                <div className='col-md-6'>
                <Image 
                    src={process.env.PUBLIC_URL + '/images/rose.png'} 
                    alt='rose' roundedCircle /><br></br><br></br>
                <Link to="/deaths/new">
                    <button type='button' className='btn btn-primary'>My Death Destiny</button>
                </Link>
                </div>
                <div className='col-md-6'>
                <Image 
                    src={process.env.PUBLIC_URL + '/images/newspaper.jpg'} 
                    alt='newspaper' roundedCircle /><br></br><br></br>
                <Link to="/deaths">
                    <button type='button' className='btn btn-primary'>O'bits</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;