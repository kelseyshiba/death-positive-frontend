export const addCeremony = (ceremony) => {
    return (dispatch) => {
        const configObj ={
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(ceremony)
        };

        fetch(`http://localhost:3000/ceremonies`, configObj)
        .then(response => response.json())
        .then(data => console.log(data))
    }
}

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