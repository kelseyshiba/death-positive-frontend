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
          dispatch({type:'CREATE_CEREMONY', death: data})
        })
      }
}

