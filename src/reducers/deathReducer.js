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

            // const deathIdx = state.deaths.findIndex(death => death.id === action.ceremony.data.attributes.death_id)
            // let death = state.deaths[deathIdx]
            // death.attributes.ceremony = (Object.assign({}, action.ceremony.data.attributes))

            // return {...state,
            //     friends: [
            //       ...state.friends.slice(0, removalIndex),
            //       ...state.friends.slice(removalIndex + 1)
            //     ]
            //   }
            
        default: 
            return state
    } 
}


    
   

// let deaths = [{id: "1", type: "death", attributes: {ceremony: {id: 1, location_name: "Joes"}, date: "2020-09-23", person: "Kelsey Shiba"}},{id: "2", type: "death", attributes: {ceremony: {id: 13, location_name: "Bobs"}, date: "2020-20-20", person: "Bob"}}]
