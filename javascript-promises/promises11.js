// fetch data with fetch api and print response
fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc')
    .then(response => console.log(response))

// fetch data with fetch and print data
fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc')
    .then(response => response.json())
    .then(data => console.log(data))