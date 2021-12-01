console.log("Welcome to Spotify");

// Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');

let songs = [
    {songName: "salam-e-Ishqq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishqq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishqq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishqq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishqq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishqq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishqq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishqq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
]
// let audioElement = new Audio('1.mp3');
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }

})
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})