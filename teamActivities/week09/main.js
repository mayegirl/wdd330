/*
 * Wes Bos's Drum Kit lesson (https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/index-FINISHED.html)
 * is a great example of using custom data- attributes & dataset properties to effectively
 * "pair" different types of elements.
 */

let keyLength = []

bindKeys = () => {
  let body = document.getElementsByTagName('body');
  body[0].addEventListener('keydown', e => playSound(e.keyCode));

  let keys = document.getElementsByClassName('key');
  for(let i=0;i<keys.length; i++){
    keyLength[keys[i].dataset.key] = 0;
  }

  let audios = document.getElementsByTagName('audio');
  for(let i=0; i<audios.length; i++) {
    audios[i].addEventListener('ended',
        e => stopPlayingKey(audios[i].dataset.key))
  }
}

playSound = (id) => {
  let audios = document.getElementsByTagName('audio');
  for(let i=0; i<audios.length; i++) {
    if(audios[i].dataset.key == id){
      if(audios[i].paused == false 
        && audios[i].dataset.key == id) {
        audios[i].pause();
        audios[i].currentTime = 0;
        stopPlayingKey(audios[i].dataset.key);
      }

      audios[i].play();
      playingKey(id);

      currentAudio = audios[i];
    }
  }
}

playingKey = (id) => {
  let keys = document.getElementsByClassName('key');
  for(let i=0;i<keys.length; i++){
    if(keys[i].dataset.key == id) {
      moveKey(keys[i], id);
      keys[i].classList.add("playing");
      
      return;
    }
  }
}

moveKey = (key, id) => {
  keyLength[id] += 10;  
  if(keyLength[id] > 100) {
    keyLength[id] = 0;
  }
  key.style.transform = "translateY("+keyLength[id]+"px)";
}

stopPlayingKey = (id) => {
  let keys = document.getElementsByClassName('key');
  for(let i=0;i<keys.length; i++){
    if(keys[i].dataset.key == id) {
      keys[i].classList.remove("playing");
      return;
    }
  }
}

bindKeys();