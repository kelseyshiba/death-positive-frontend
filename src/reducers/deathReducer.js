export default function deathReducer(state = { deaths: [], loading: false }, action) {
    switch(action.type){
        case 'LOADING_DEATHS':
            return {...state, 
                deaths: [...state.deaths],
                loading: true}
        case 'ADD_DEATHS':
            return state.deaths
        default: 
            return state
    } 
}

// ///  return {
//     ...state,
//     cats: [...state.cats],
//     loading: true
//   }
// case 'ADD_CATS':
//   return {
//     ...state,
//     cats: action.cats,
//     loading: false
//   }