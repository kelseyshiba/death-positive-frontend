import React from 'react';
import { connect } from 'react-redux';
import { editCeremony } from '../../actions/ceremonyActions';

class CeremonyEdit extends React.Component {
    state = {
        kind: '',
        location_name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        speaker: '',
        name: '',
        narrative: '',
        death_id: ''
    }
    
    componentDidMount(){
        let ceremony = this.props.ceremonies.find(ceremony => ceremony.id == this.props.match.params.id)
        this.setState({
            kind: ceremony.attributes.kind,
            location_name: ceremony.attributes.location_name,
            address: ceremony.attributes.address,
            city: ceremony.attributes.city,
            state: ceremony.attributes.state,
            zip: ceremony.attributes.zip,
            speaker: ceremony.attributes.speaker,
            name: ceremony.attributes.name,
            narrative: ceremony.attributes.narrative,
            death_id: ceremony.attributes.death_id
        })
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleEditSubmit = (event, id) => {
        event.preventDefault()
        console.log('handle Submit', id)
        this.props.editCeremony(this.state, id)
        this.props.history.push(`/deaths/${this.state.death_id}`)
        this.setState({
                kind: '',
                location_name: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                speaker: '',
                name: '',
                narrative: '',
                death_id: ''
        })
    }

    render () {
        let ceremonyId = this.props.match.params.id
        let ceremony = this.props.ceremonies.find(ceremony => ceremony.id == ceremonyId)

        return (
            <div>
                <form onSubmit={(event) => this.handleEditSubmit(event, this.props.match.params.id)} className='form=group'>
                <h4>Edit Ceremony Details</h4>
                    <label htmlFor='name'>Name: </label>
                    <input onChange={event => this.handleChange(event)} className='form-control' type='text' name='name' value={this.state.name} placeholder={ceremony.attributes.name} />
                    <label htmlFor='location_name'>Location: </label>
                    <input onChange={event => this.handleChange(event)} className='form-control' type='text' name='location_name' value={this.state.location_name} placeholder={ceremony.attributes.location_name} />
                    <label htmlFor='address'>Address: </label>
                    <input onChange={event => this.handleChange(event)} className='form-control' type='text' name='address' value={this.state.address} placeholder={ceremony.attributes.address} />
                    <label htmlFor='city'>City: </label>
                    <input onChange={event => this.handleChange(event)} className='form-control' type='text' name='city' value={this.state.city} placeholder={ceremony.attributes.city} />
                    <label htmlFor='state'>State: </label>
                    <input onChange={event => this.handleChange(event)} className='form-control' type='text' name='state' value={this.state.state} placeholder={ceremony.attributes.state} />
                    <label htmlFor='zip'>Zip: </label>
                    <input onChange={event => this.handleChange(event)} className='form-control' type='text' name='zip' value={this.state.zip} placeholder={ceremony.attributes.zip} />
                    <label htmlFor='type'>Type: </label>
                    <input onChange={event => this.handleChange(event)} className='form-control' type='text' name='kind' value={this.state.kind} placeholder={ceremony.attributes.kind} />
                    <label htmlFor='speaker'>Speaker: </label>
                    <input onChange={event => this.handleChange(event)} className='form-control' type='text' name='speaker' value={this.state.speaker} placeholder={ceremony.attributes.speaker} />
                    <label htmlFor='narrative'>Schedule: </label>
                    <input onChange={event => this.handleChange(event)} className='form-control' type='text' name='narrative' value={this.state.narrative} placeholder={ceremony.attributes.narrative} />
                    <label htmlFor='cost'>Cost: </label> 
                    <input onChange={event => this.handleChange(event)} className='form-control' type='text' name='cost' value={this.state.cost} placeholder={ceremony.attributes.cost} />
                    <button className='btn btn-success'>Submit Changes</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { editCeremony })(CeremonyEdit);