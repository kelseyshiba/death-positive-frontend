export const fetchDeaths = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_DEATHS'})
        fetch('http://localhost:3000/api/v1/deaths')
        .then(response => response.json())
        .then(resp => {
            dispatch({type: 'FETCH_DEATHS', deaths: resp.data})
        })
    }
}


