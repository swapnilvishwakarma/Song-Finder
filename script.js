// const data = fetch('https://itunes.apple.com/search?');

// console.log(data);

// setTimeout(() => {
//     console.log(data);
// }, 2000);

// JS code is asynchronus => while the request is being fetched, code below it is not blocked.

const url = 'https://itunes.apple.com/search?term=beyonce'

fetch(url)
.then( (response) => response.json() )
.then((data) => {
    // console.log(data.results);
    const artists = data.results;
    return artists.map(result => {
        const songContainer = document.getElementById('songs')

        const article = document.createElement('article'),
        artist = document.createElement('p'),
        song = document.createElement('p'),
        img = document.createElement('img'),
        audio = document.createElement('audio'),
        audioSource = document.createElement('source')

        artist.innerHTML = result.artistName
        song.innerHTML = result.trackName
        img.src = result.artworkUrl100
        audioSource.src = result.previewUrl
        audio.setAttribute('controls', '')

        article.appendChild(img)
        article.appendChild(artist)
        article.appendChild(song)
        article.appendChild(audio)
        article.appendChild(audioSource)

        songContainer.appendChild(article)

        // console.log(result)
    })
})
.catch(error => console.log('Request failed: ', error))
