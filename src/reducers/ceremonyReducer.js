export default function ceremonyReducer(state = [], action) {
    switch(action.type){
        case 'CREATE_CEREMONY':
            //console.log('in create ceremony action', action.payload.data)
            return [...state, action.payload.data]
            // let deaths = state.deaths.map(death=> {
            //     if (death.id === action.death.data.id) {
            //         return action.death.data
            //     } else {
            //         return death
            //     }
            // })
            // return {...state, deaths: deaths}
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
        case 'FETCH_CEREMONY':
            return [...state, action.payload]
        case 'FETCH_CEREMONIES':
            console.log('fetch ceremonies', action.payload.data)
            return state = action.payload.data
        default:
            return [...state]
    }
}