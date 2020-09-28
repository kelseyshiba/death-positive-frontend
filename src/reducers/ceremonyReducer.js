export default function ceremonyReducer(state = [], action) {
    switch(action.type){
        case 'CREATE_CEREMONY':
            return [...state, action.payload.data]
        case 'ADD_CONTACT':
            console.log('in add contact action', action.payload.data.id) //ceremony
            let ceremonies = state.map(ceremony => {
                if (ceremony.id == action.payload.data.id){
                    return {...ceremony, contacts: action.payload.data.attributes.contacts}
                } else {
                    return ceremony
                }
            })
            return ceremonies
        case 'DELETE_CONTACT':
            console.log('in delete contact action', action)
            return [...state.filter(ceremony => ceremony.id !== action.payload.id)]
        case 'FETCH_CONTACTS':
            console.log('fetch contacts', action.payload.data)
            let ceremonies2 = state.map(ceremony => {
                if (ceremony.id == action.payload.data[0].attributes.ceremony_id){
                    return {...ceremony, contacts: action.payload.data}
                } else {
                    return ceremony
                }
            })
            return ceremonies2
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