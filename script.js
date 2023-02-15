
// Navbar toggle
const primaryNavigation = document.querySelector(".primaryNavigation");
const navToggle = document.querySelector(".mobileNavToggle");
const closeNav = document.querySelector(".fa-xmark");

navToggle.addEventListener("click", () => {
  const visibility = primaryNavigation.getAttribute("data-visible");

  if(visibility === "false"){
    primaryNavigation.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);

  } else {
    primaryNavigation.setAttribute('data-visible', false);
    navToggle.setAttribute("aria-expanded", false);

  }
});


//Language changer
var language = document.querySelector(".languageContainer");
var languageIcon = document.querySelector(".languageIcon");
var closeBtn = document.querySelector("#close");

languageIcon.addEventListener("click", function makeLanguageVisible(){
  language.classList.add("visible");
  languageIcon.style.color = "black";

});


closeBtn.addEventListener("click", function makeLanguageInvisible(){
  language.classList.remove("visible");
  languageIcon.style.color = "rgb(0,0,0,0.7)";

});






const musicContainer = document.querySelector('.musicContainer');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progressContainer');
const titleMusicPlayer = document.querySelector('#titleMusicPlayer');
const cover = document.querySelector('#cover');
const originalSongs = "originalSongs";

const songs = ["When You Changed The Game", 'Golden', 'On My Way']

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song){
  titleMusicPlayer.innerText = song;
  audio.src = `audio/${song}.mp3`;
  cover.src = `images/${originalSongs}.jpg`;
}

function playSong(){
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function pauseSong(){
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

function prevSong(){
  songIndex--;

  if(songIndex < 0){
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong(){
  songIndex++;

  if(songIndex > songs.length - 1){
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(e){
  const{duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e){
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}


//Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if(isPlaying){
    pauseSong();

    } else{
      playSong();
    }

});

//Change song events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);



//Tree section
var flower1 = document.querySelector(".imgFlower1");
var scale1 = document.querySelector(".story1Scale");

flower1.addEventListener("mouseover", function showScale(){
  scale1.classList.add("morePaddingScale");
  scale1.classList.add("contentVisible1");
});

flower1.addEventListener("mouseleave", function hideScale(){
  scale1.classList.remove("morePaddingScale");
  scale1.classList.remove("contentVisible1");
});

// -------------------
var flower2 = document.querySelector(".imgFlower2");
var scale2 = document.querySelector(".story2Scale");

flower2.addEventListener("mouseover", function showScale(){
  scale2.classList.add("morePaddingScale");
  scale2.classList.add("contentVisible2");
});

flower2.addEventListener("mouseleave", function hideScale(){
  scale2.classList.remove("morePaddingScale");
  scale2.classList.remove("contentVisible2");
});

// ------------------
var flower3 = document.querySelector(".imgFlower3");
var scale3 = document.querySelector(".story3Scale");

flower3.addEventListener("mouseover", function showScale(){
  scale3.classList.add("morePaddingScale");
  scale3.classList.add("contentVisible3");
});

flower3.addEventListener("mouseleave", function hideScale(){
  scale3.classList.remove("morePaddingScale");
  scale3.classList.remove("contentVisible3");
});

// -------------------
var flower4 = document.querySelector(".imgFlower4");
var scale4 = document.querySelector(".story4Scale");

flower4.addEventListener("mouseover", function showScale(){
  scale4.classList.add("morePaddingScale");
  scale4.classList.add("contentVisible4");
});

flower4.addEventListener("mouseleave", function hideScale(){
  scale4.classList.remove("morePaddingScale");
  scale4.classList.remove("contentVisible4");
});

// ------------------
var flower5 = document.querySelector(".imgFlower5");
var scale5 = document.querySelector(".story5Scale");

flower5.addEventListener("mouseover", function showScale(){
  scale5.classList.add("morePaddingScale");
  scale5.classList.add("contentVisible5");
});

flower5.addEventListener("mouseleave", function hideScale(){
  scale5.classList.remove("morePaddingScale");
  scale5.classList.remove("contentVisible5");
});

//-----------------
var flower6 = document.querySelector(".imgFlower6");
var scale6 = document.querySelector(".story6Scale");

flower6.addEventListener("mouseover", function showScale(){
  scale6.classList.add("morePaddingScale");
  scale6.classList.add("contentVisible6");
});

flower6.addEventListener("mouseleave", function hideScale(){
  scale6.classList.remove("morePaddingScale");
  scale6.classList.remove("contentVisible6");
});


//Fade in scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {threshold:0, rootMargin: "0px 0px -250px 0px"};
const sliders = document.querySelectorAll(".slide-in");
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else{
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
