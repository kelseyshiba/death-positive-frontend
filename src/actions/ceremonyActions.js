export const createCeremony = (ceremony) => {
    return (dispatch) => {
        const configObj ={
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(ceremony)
        };

        fetch(`http://localhost:3000/api/v1/ceremonies`, configObj)
        .then(response => response.json())
        .then(data => {
          dispatch({type:'CREATE_CEREMONY', payload: data})
        })
      }
}

export const addContact = (contact, id) => {
  return (dispatch) => {
    const configObj ={
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(contact)
  };

      fetch(`http://localhost:3000/api/v1/ceremonies/${id}/contacts`, configObj)
      .then(response => response.json())
      .then(data => {
        dispatch({type:'ADD_CONTACT', payload: data})
      })
  }
}
export const deleteContact = (ceremonyId, contactId) => {
  return (dispatch) => {
    const configObj ={
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(contactId)
    };

    fetch(`http://localhost:3000/api/v1/ceremonies/${ceremonyId}/contacts/${contactId}`, configObj)
    .then(response => response.json())
    .then(data => {
      dispatch({type:'DELETE_CONTACT', payload: data})
    })
  }
}

export const fetchCeremonies = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/ceremonies`)
    .then(response => response.json())
    .then(data => dispatch({type: 'FETCH_CEREMONIES', payload: data}))
  }
}

export const fetchContacts = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/ceremonies/${id}/contacts`)
    .then(response => response.json())
    .then(data => dispatch({type: 'FETCH_CONTACTS', payload:data}))
  }
}

export const editCeremony = (ceremony, id) => {
    return(dispatch) => {
      const configObj ={
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(ceremony)
      };
  
      fetch(`http://localhost:3000/api/v1/ceremonies/${id}`, configObj)
      .then(response => response.json())
      .then(data => {
        dispatch({type:'EDIT_CEREMONY', payload: data})
      })
    }
}


    