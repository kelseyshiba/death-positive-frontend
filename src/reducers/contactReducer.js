export default function contactReducer(state = [], action) {
    switch(action.type){
        case 'FETCH_CONTACTS':
            console.log('fetch contacts', action.payload.data)
            return state = action.payload.data
        case 'ADD_CONTACT':
            console.log('in add contact action', action.payload.data)
            return [...state, action.payload.data]
        case 'DELETE_CONTACT':
            console.log('in delete contact action', action.payload.data.id)
            return [...state.filter(contact => contact.id !== action.payload.data.id)]
        case 'UPDATE_CONTACT':
            console.log('in update contact', action.payload.data)
            let contacts = state.map(contact => {
                if (contact.id == action.payload.data.id){
                    return action.payload.data
                } else {
                    return contact
                }
            })
            return contacts
        default:
            return state
    }
}