export default function deathReducer(state = { deaths: [], loading: false }, action) {
    switch(action.type){
        case 'LOADING_DEATHS':
            return {...state, 
                deaths: [...state.deaths],
                loading: true}
        case 'FETCH_DEATHS':
                console.log('Death Reducer', action.deaths)
            return {...state, 
            deaths: action.deaths, 
            loading: false }
            //(24) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        case 'ADD_DEATH': 
            console.log('add death action', action.death.data) 
            return {
                ...state,
                deaths: [...state.deaths, action.death.data]
            }
        case 'DELETE_DEATH':
            //console.log('delete death action', action)
            return {
                ...state, 
                deaths: [...state.deaths.filter(death => death.id !== action.id)]
            }
        default: 
            return state
    } 
}
