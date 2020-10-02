export default function ceremonyReducer(state = [], action) {
    switch(action.type){
        case 'CREATE_CEREMONY':
            return [...state, action.payload.data]
        case 'FETCH_CEREMONIES':
            console.log('fetch ceremonies', action.payload.data)
            return state = action.payload.data
        case 'EDIT_CEREMONY':
            console.log('updated ceremony', action.payload.data)
            let ceremonies3 = state.map(ceremony => {
                if (ceremony.id == action.payload.data.id){
                    return {...ceremony}
                } else {
                    return ceremony
                }
            })
            return ceremonies3
        default:
            return [...state]
    }
}