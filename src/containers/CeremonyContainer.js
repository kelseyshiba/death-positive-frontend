import React from 'react';
import Kind from '../components/Kind';
import Location from '../components/Location';
import Speaker from '../components/Speaker';
import Narrative from '../components/Narrative';
import Name from '../components/Name';
import CeremonyCompleted from '../components/CeremonyCompleted';

class Ceremony extends React.Component {
    state = {
        kind: '',
        pageNum: 0,
        location_name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        speaker: '',
        name: '',
        narrative: ''
    }
    //needs state make the component did mount do fetch for the ceremony
    //pass down the ceremony id - to the show route for the ceremony info
    //fetch if created, then make new / form
   
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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCeremony(this.state)
        this.setState({
            kind: '',
            pageNum: 0,
            locationName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            speaker: '',
            name: '',
            narrative: ''
        })
    }

    render (){
        return (
            <div>
                {this.state.pageNum === 0 && <Kind selectKind={this.selectKind} changeColor={this.changeColor}
                    reverseChange={this.reverseChange}/>}
                {this.state.pageNum === 1 && <Location state={this.state} handleChange={this.handleChange}/>}
                {this.state.pageNum === 2 && <Speaker state={this.state}  handleChange={this.handleChange}/>}
                {this.state.pageNum === 3 && <Narrative state={this.state} handleChange={this.handleChange}/>}
                {this.state.pageNum === 4 && <Name state={this.state} handleChange={this.handleChange}/>}
                {this.state.pageNum === 5 && <CeremonyCompleted />}
                
                {this.state.pageNum === 0 && 
                   <div className='row'>
                       <div className='col-sm-6'>
                        </div>
                        <div className='col-sm-6'>
                           <button onClick={this.handleNext} className='btn btn-primary'>Next</button>
                        </div>
                    </div>}
                {this.state.pageNum > 0 && this.state.pageNum < 4 &&
                <div className='row'>
                    <div className='col-sm-6'>
                        <button onClick={this.handleBack} className='btn btn-primary'>Back</button>
                    </div>
                    <div className='col-sm-6'>
                        <button onClick={this.handleNext} className='btn btn-primary'>Next</button>
                    </div>
                </div>
                }
                {this.state.pageNum === 4 && 
                <div>
                    <button className='btn btn-success' onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </div>}
            </div>
        )
    }
}

export default Ceremony;