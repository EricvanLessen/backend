// Fetch data with fetch API and print response
fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));