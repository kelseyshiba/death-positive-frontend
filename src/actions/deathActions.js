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
    .then(resp => {
      dispatch({type: 'ADD_DEATH', death: resp.data.attributes })
    })
  }
}



///add other actions
  
// export const createToy = (toy) => {
//   return (dispatch) => {
//       const configObj = {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify(toy),
//         };

//         fetch("http://localhost:3000/toys", configObj)
//           .then((res) => res.json())
//           .then((newToy) => dispatch(addToy(newToy)));
//   }
// }
