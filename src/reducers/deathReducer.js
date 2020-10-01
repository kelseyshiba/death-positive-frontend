export default function deathReducer(state = [], action) {
    switch(action.type){
        // case 'LOADING_DEATHS':
        //     return [...state, action.payload.data]
        case 'FETCH_DEATHS':
            return state = action.payload.data
        case 'ADD_DEATH': 
             return [...state, action.death.data]
        case 'DELETE_DEATH':
            return [...state.filter(death => death.id !== action.id)]   
        default: 
            return state
    } 
}


    
   


