console.log("Welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById("myProgressBar");
const songName = Array.from(document.getElementsByClassName('songName'));

let songItems = Array.from(document.getElementsByClassName('songItem'));

let songItemsPlay = Array.from(document.getElementsByClassName('song-ItemPlay'));
const gif = document.getElementById('gif');


let songs = [



    {
        songName: 'Ap/Shubh',
        filePath: "1.mp3",
        coverPath: "Assets/covers/1.jpg",
    },
    {
        songName: 'Apna Bana Le',
        filePath: "2.mp3",
        coverPath: "Assets/covers/2.jpg",
    },
    {
        songName: 'Parshawan',
        filePath: "3.mp3",
        coverPath: "Assets/covers/3.jpg",
    },
    {
        songName: 'Heathens',
        filePath: "4.mp3",
        coverPath: "Assets/covers/4.jpg",
    },
    {
        songName: 'Hometown',
        filePath: "5.mp3",
        coverPath: "Assets/covers/5.jpg",
    },
    {
        songName: 'Ride',
        filePath: "6.mp3",
        coverPath: "Assets/covers/6.jpg",
    },
    {
        songName: 'Strssed Out',
        filePath: "7.mp3",
        coverPath: "Assets/covers/7.jpg",
    },
]



songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;


})

console.log(songs);

masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        gif.style.opacity = "1";
        gif.style.marginTop = "30px";


    }
    else if (audioElement.play || audioElement.currentTime >= 0) {
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = "0";

    }
})


// handle pause and click 



// listen to event 
audioElement.addEventListener('timeupdate', () => {

    console.log('timeupdate');
    //update seekbar
    // how much percent our audio will work
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    console.log(parseInt(audioElement.currentTime));
    console.log(parseInt(audioElement.duration));


    myProgressBar.value = progress;




})
myProgressBar.addEventListener('change', () => {

    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})


// const makeAllPlays = () => {


//     songItems.forEach((element) => {
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     })


// }

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('song-ItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })


}


Array.from(document.getElementsByClassName('song-ItemPlay')).forEach((element) => {


    element.addEventListener('click', (e) => {

        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        songIndex = parseInt(e.target.id);


        audioElement.src = `${songIndex}.mp3`;
        audioElement.currentTime = 0;

        masterSongName.innerText = songs[songIndex - 1].songName
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = "1";
        gif.style.marginTop = "30px";

    })
})


document.getElementById("forward").addEventListener('click', () => {

    if (songIndex >= 7) {
        songIndex = 1;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = "1";
    gif.style.marginTop = "30px";
})


document.getElementById("previous").addEventListener('click', () => {

    if (songIndex <= 1) {

        songIndex = 1;
    }
    else {
        songIndex -= 1;
    }



    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();

    masterSongName.innerText = songs[songIndex - 1].songName
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = "1";
    gif.style.marginTop = "30px";
})



// audioElement.play();


