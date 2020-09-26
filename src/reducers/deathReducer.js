export default function deathReducer(state = { deaths: [], loading: false }, action) {
    switch(action.type){
        case 'LOADING_DEATHS':
            return {...state, 
                deaths: [...state.deaths],
                loading: true}
        case 'FETCH_DEATHS':
            return {...state, 
            deaths: action.deaths, 
            loading: false }
            //(24) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        case 'ADD_DEATH': 
            return {
                ...state,
                deaths: [...state.deaths, action.death.data]
            }
        case 'DELETE_DEATH':
            return {
                ...state, 
                deaths: [...state.deaths.filter(death => death.id !== action.id)]
            }
        case 'CREATE_CEREMONY':
            console.log('in create ceremony action', action.death)
            let deaths = state.deaths.map(death=> {
                if (death.id === action.death.data.id) {
                    return action.death.data
                } else {
                    return death
                }
            })
            return {...state, deaths: deaths}
        case 'ADD_CONTACT':
            console.log('in add contact action', action.payload.data.attributes.death_id) //ceremony
            //death id, type, attributes
            //death.attributes
            let newContacts = action.payload.data.attributes.contacts
            let deaths2 = state.deaths.map(death => {
                if (death.id == action.payload.data.attributes.death_id){
                    //return {...death, ceremony: {...death.attributes.ceremony, contacts: newContacts}}
                    return {...death, attributes: {...death.attributes, ceremony: {...death.attributes.ceremony, contacts: newContacts}}}
                } else {
                    return death
                }
            })
            return {...state, deaths: deaths2}   
        case 'FETCH_CEREMONY':
            console.log('fetch ceremony action', action.ceremony.data.attributes)
            return {...state}         
        default: 
            return state
    } 
}


    
   

// let deaths = [{id: "1", type: "death", attributes: {ceremony: {id: 1, location_name: "Joes"}, date: "2020-09-23", person: "Kelsey Shiba"}},{id: "2", type: "death", attributes: {ceremony: {id: 13, location_name: "Bobs"}, date: "2020-20-20", person: "Bob"}}]
