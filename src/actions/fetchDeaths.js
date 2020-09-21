export function fetchDeaths(){
    fetch('http://localhost:3000/api/v1/deaths')
    .then(response => response.json())
    .then(data => console.log(data))
}

