import React from 'react';
import Image from 'react-bootstrap/Image';

const Kind = (props) => {
    return (<div>
        <h4 className='text-center'>Choose Your Sleeping Arrangements</h4>
        <div id='death-row' className='row'>
            <div className='col-sm-6'>
                <h5>Burial</h5>
                <Image 
                    name='burial'
                    onClick={(event) => props.selectKind(event)} 
                    onMouseOver={(event) => props.changeColor(event)}
                    onMouseLeave={(event) => props.reverseChange(event)}
                    src={process.env.PUBLIC_URL + '/images/coffin.png'} 
                    roundedCircle />
            </div>
            <div className='col-sm-6'>
                <h5>Cremation</h5>
                <Image 
                    name='cremation'
                    onClick={(event) => props.selectKind(event)} 
                    onMouseOver={(event) => props.changeColor(event)}
                    onMouseLeave={(event) => props.reverseChange(event)}
                    src={process.env.PUBLIC_URL + '/images/urn.png'} 
                    roundedCircle />
            </div>
        </div>
    </div>)
}

export default Kind;