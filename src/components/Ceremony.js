import React from 'react';
import Kind from './Kind';
import Location from './Location';
import Speaker from './Speaker';

class Ceremony extends React.Component {
    state = {
        kind: '',
        pageNum: 0,
        locationName: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    }
    //needs state make the component did mount do fetch for the ceremony
    //pass down the ceremony id - to the show route for the ceremony info
    //fetch if created, then make new / form
    //choices as inputs?
    //completed stuff or etc..
    selectKind = (event) => {
       
        if(event.target.parentElement.style.backgroundColor === 'lightblue') {
            event.target.parentElement.style.backgroundColor = '' 
        } else {
            event.target.parentElement.style.backgroundColor = 'lightblue';
        }

        this.setState({
            kind: event.target.name
        })        
    }

    changeColor = (event) => {
        event.target.style.opacity = `50%`;
    }

    reverseChange = (event) => {
        event.target.style.opacity = '100%';
    }

    handleBack = () => {
        this.setState({
            pageNum: this.state.pageNum - 1
        })
    }

    handleNext = () => {
        this.setState({
            pageNum: this.state.pageNum + 1
        })
    }    

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render (){
        return (
            <div>
                {this.state.pageNum === 0 && <Kind selectKind={this.selectKind} changeColor={this.changeColor}
                    reverseChange={this.reverseChange}/>}
                {this.state.pageNum === 1 && <Location state={this.state} handleChange={this.handleChange}/>}
                {this.state.pageNum === 2 && <Speaker />}
                {this.state.pageNum >= 0 &&
                <div className='row'>
                    <div className='col-sm-6'>
                        <button onClick={this.handleBack} className='btn btn-primary'>Back</button>
                    </div>
                    <div className='col-sm-6'>
                        <button onClick={this.handleNext} className='btn btn-primary'>Next</button>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Ceremony;