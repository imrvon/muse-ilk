// Hamburger Setup
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

// Set Mouse Cursor
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('a');

window.addEventListener('mousemove',cursor);

function cursor(e)  {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

// Reduce Mouse Cursor Size on Hover
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-reduce');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-reduce');
    });
});

// Move Background Image
document.addEventListener("mousemove", parallax);
function parallax(a) {
    this.querySelectorAll(".movenow").forEach(function(move) {
        var moving_value = move.getAttribute('data-speed');

        var x = (a.clientX * moving_value)/250;
        var y = (a.clientY * moving_value)/250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

//  Music Section
const mute = document.querySelector('.mute');
const VolumeSlider = document.querySelector('.volume-bar');
const musicContainer =  document.querySelector('.music-container');
const playBtn =  document.querySelector('#play');
const prevBtn =  document.querySelector('#prev');
const nextBtn =  document.querySelector('#next');
const audio =  document.querySelector('#audio');
const musicProgress =  document.querySelector('.progress');
const progressContainer =  document.querySelector('.progress-container');
const title =  document.querySelector('#title');
const cover =  document.querySelector('#cover');


// Song Titles
const songs = ['Anson Seabra - Magazines', 'AUGUST 08, Jhene Aiko - Water Sign', 'Bazzi - Renee\'s Song', 'BEAUZ & JVNA - Crazy', 'Dizzy - Joshua', 'Erik Jonasson - Like a Funeral', 'FINNEAS - A Concert Six Months From Now', 'Lauv & LANY - Mean It', 'Maisie Peters - Talking To Strangers', 'Nicklas Sahl - Unsolvable', 'Novo Amor - Opaline', 'The Band CAMINO & Chelsea Cutler - Crying Over You', 'Vance Joy - Emmylou']

// Track Songs
let songIndex = 12;

// Initially Load Song Info from DOM
loadSong(songs[songIndex])

// Update Song Details
function loadSong(song) {
    title.innerText = song
    audio.src=`music/${song}.mp3`
    cover.src=`img/music-art/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause()
}

function prevSong() {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    musicProgress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

// Next and Previous Event Listeners
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

// Music Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play') 
    
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// Event Listeners for Audio
audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)


// Volume Slider
for (let f of document.querySelectorAll('input[type="range"].volume-bar')) {
    f.style.setProperty('--value', f.value);
    f.style.setProperty('--min', f.min == '' ? '0' : f.min);
    f.style.setProperty('--max', f.max == '' ? '100' : f.max);
    f.addEventListener('input', () => f.style.setProperty('--value', f.value));
  }

VolumeSlider.addEventListener('input', function() {
    audio.volume= parseInt(this.value)/10;
    step = .01;
    min = 0;
    max = 1;
    value = 1;     
    }, false);

    // Mute
    mute.addEventListener('click', function() {
        if(audio.muted) {
          audio.muted = false;
           this.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; 
        } else {
          audio.muted = true;
          this.innerHTML = '<i class="fa-solid fa-volume-off"></i>';
        }
      }, false);