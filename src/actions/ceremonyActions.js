export const createCeremony = (ceremony) => {
  console.log(7)
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
          console.log(8)
        })
        console.log(9)
      }
    console.log(10)
}

export const fetchCeremonies = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/ceremonies`)
    .then(response => response.json())
    .then(data => dispatch({type: 'FETCH_CEREMONIES', payload: data}))
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


    