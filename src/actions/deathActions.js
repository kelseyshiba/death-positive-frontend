export const createDeath = death => {
  return (dispatch) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(death),
    };

    fetch('http://localhost:3000/api/v1/deaths', configObj)
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'ADD_DEATH', death: data })
    })
  }
}

export const deleteDeath = id => {
  return (dispatch) => {
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(id),
    };

    fetch(`http://localhost:3000/api/v1/deaths/${id}`, configObj)
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'DELETE_DEATH', id})
    })
  }
}


