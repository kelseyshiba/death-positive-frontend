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

export const fetchCeremony = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/ceremonies/${id}`)
    .then(response => response.json())
    .then(data => dispatch({type: 'FETCH_CEREMONY', ceremony: data})
    )}
}

export const fetchCeremonies = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/ceremonies`)
    .then(response => response.json())
    .then(data => dispatch({type: 'FETCH_CEREMONIES', payload: data}))
  }
}


    