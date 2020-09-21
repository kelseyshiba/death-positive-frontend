export default function deathReducer(state = { deaths: [], loading: false }, action) {
    switch(action.type){
        case 'LOADING_DEATHS':
            return {...state, 
                deaths: [...state.deaths],
                loading: true}
        case 'FETCH_DEATHS':
            return {...state, 
            deaths: action.deaths.data, 
            loading: false }
        case 'ADD_DEATH':  
            console.log(action)       
            return {
                ...state,
                deaths: [...state.deaths, action.death]
            }
        default: 
            return state
    } 
}
