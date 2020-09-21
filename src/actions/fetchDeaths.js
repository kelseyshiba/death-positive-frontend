export const fetchDeaths = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_DEATHS'})
        fetch('http://localhost:3000/api/v1/deaths')
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'ADD_DEATHS', deaths: data})
        })
    }
}

// export const fetchCats = () => {
//     return (dispatch) => {
//       dispatch({ type: 'LOADING_CATS'})
//       fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
//         return response.json()
//       }).then(responseJSON => {
//         dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
//       })
//     }
//   }

