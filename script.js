const data = fetch('https://itunes.apple.com/search?');

console.log(data);

setTimeout(() => {
    console.log(data);
}, 2000);
