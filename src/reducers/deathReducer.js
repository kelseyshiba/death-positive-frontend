export default function deathReducer(state = [], action) {
    switch(action.type){
        // case 'LOADING_DEATHS':
        //     return [...state, action.payload.data]
        case 'FETCH_DEATHS':
            console.log('fetch deaths', action.payload.data)
            return state = action.payload.data
        case 'ADD_DEATH': 
            // console.log('add death', action)
             return [...state, action.death.data]
        case 'DELETE_DEATH':
            return [...state.filter(death => death.id !== action.id)]
        // case 'CREATE_CEREMONY':
        //     console.log('in create ceremony action', action.death)
        //     let deaths = state.deaths.map(death=> {
        //         if (death.id === action.death.data.id) {
        //             return action.death.data
        //         } else {
        //             return death
        //         }
        //     })
        //     return {...state, deaths: deaths}
        // case 'ADD_CONTACT':
        //     console.log('in add contact action', action.payload.data.attributes.death_id) //ceremony
        //     //death id, type, attributes
        //     //death.attributes
        //     let newContacts = action.payload.data.attributes.contacts
        //     let deaths2 = state.deaths.map(death => {
        //         if (death.id == action.payload.data.attributes.death_id){
        //             //return {...death, ceremony: {...death.attributes.ceremony, contacts: newContacts}}
        //             return {...death, attributes: {...death.attributes, ceremony: {...death.attributes.ceremony, contacts: newContacts}}}
        //         } else {
        //             return death
        //         }
        //     })
        //     return {...state, deaths: deaths2}   
        // case 'FETCH_CEREMONY':
        //     console.log('fetch ceremony action', action.ceremony.data.attributes)
        //     return {...state}         
        default: 
            return state
    } 
}


    
   


