// const data = fetch('https://itunes.apple.com/search?');

// console.log(data);

// setTimeout(() => {
//     console.log(data);
// }, 2000);

// JS code is asynchronus => while the request is being fetched, code below it is not blocked.

const url = 'https://itunes.apple.com/search?term=beyounce';

fetch(url, {mode: 'no-cors'})
.then( (response) => response.json())
.then((data) => {
    console.log(data.results);
})
.catch(error => console.log('Request failed: ', error))
