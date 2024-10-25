const playBtn = document.querySelector('#playPause');
const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const muteBtn = document.querySelector('#muteToggle');
const fullscreenBtn = document.querySelector('#fullscreenToggle');
const currentTimeDisplay = document.getElementById('currentTime');
const durationTimeDisplay = document.getElementById('durationTime');
const progressBar = document.getElementById('progressBar');
const controls = document.querySelector('.controls');
let hideControlsTimeout;

playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.src = 'img/pause.svg'; 
    } else {
        video.pause();
        playBtn.src = 'img/play.svg'; 
    }
});

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted; 
    muteBtn.src = video.muted ? 'img/mute.svg' : 'img/volume.svg'; 
});

const fullscreen = document.getElementById('container');
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        fullscreen.requestFullscreen();
        setTimeout(hideControls, 4000);
    } else {
        document.exitFullscreen();
        controls.classList.remove('hidden');   
    }
});

function hideControls() {
    controls.classList.add('hidden'); 
}

video.addEventListener('mousemove', () => {
    controls.classList.remove('hidden');  
    clearTimeout(hideControlsTimeout); 
    hideControlsTimeout = setTimeout(hideControls, 4000);
});

function updateTimeDisplay() {
    const videoCurrentTime = video.currentTime; 
    const videoDuration = video.duration; 
    currentTimeDisplay.innerHTML = formatTime(videoCurrentTime);
    durationTimeDisplay.innerHTML = formatTime(videoDuration);
}

video.addEventListener('loadedmetadata', () => {
    updateTimeDisplay(); 
});

video.addEventListener('timeupdate', () => {
    updateTimeDisplay(); 
    const currentTime = Math.floor(video.currentTime);
    const duration = Math.floor(video.duration);
    
    if (duration > 0) {
        progressBar.value = (currentTime / duration) * 100; 
    }
});

const timePass = 15;
prevBtn.addEventListener('click', () => {
    video.currentTime = Math.max(0, video.currentTime - timePass); 
});
nextBtn.addEventListener('click', () => {
    video.currentTime = Math.min(video.duration, video.currentTime + timePass); 
});

progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * video.duration;
    video.currentTime = newTime; 
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}