import React from 'react';
import { connect } from 'react-redux';
import { createCeremony, fetchCeremonies } from '../actions/ceremonyActions';
import Kind from '../components/ceremonies/Kind';
import Location from '../components/ceremonies/Location';
import Speaker from '../components/ceremonies/Speaker';
import Narrative from '../components/ceremonies/Narrative';
import Name from '../components/ceremonies/Name';
import CeremonyCompleted from '../components/ceremonies/CeremonyCompleted';


class CeremonyContainer extends React.Component {
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
        narrative: '',
        death_id: this.props.death.id,
    }
   
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
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createCeremony(this.state)
        this.setState({
            kind: '',
            pageNum: 0,
            location_name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            speaker: '',
            name: '',
            narrative: '',
            death_id: '',
        })
    }

    componentDidMount() {
        this.props.fetchCeremonies()
    }
    
    render () {
        
        let deathId = this.props.death.id
        let ceremony = this.props.ceremonies.find(ceremony => ceremony.attributes.death_id == deathId)
        
        if (ceremony !== undefined) {
            return (
                <div> 
                    <CeremonyCompleted handleEdit={this.handleEdit} ceremony={ceremony}/>
                </div>
            ) 
        } else { 
            return (
            <div>
                {this.state.pageNum === 0 && <Kind selectKind={this.selectKind} changeColor={this.changeColor}
                    reverseChange={this.reverseChange}/>}
                {this.state.pageNum === 1 && <Location state={this.state} handleChange={this.handleChange}/>}
                {this.state.pageNum === 2 && <Speaker state={this.state}  handleChange={this.handleChange}/>}
                {this.state.pageNum === 3 && <Narrative state={this.state} handleChange={this.handleChange}/>}
                {this.state.pageNum === 4 && <Name state={this.state} handleChange={this.handleChange}/>}
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
            </div>)
        }
    }
}
const mapStateToProps = state => {
    return {
        ceremonies: state.ceremonies
    }
}


export default connect(mapStateToProps, { createCeremony, fetchCeremonies })(CeremonyContainer);