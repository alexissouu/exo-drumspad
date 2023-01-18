
const pads = document.querySelectorAll('.key');
const sound = document.querySelectorAll('audio');


pads.forEach(pad => {
  pad.addEventListener('transitionend', removeTransition);
});


pads.forEach(pad => {
  pad.addEventListener('click', playSound);
});


document.addEventListener('keydown', playSound);


function playSound(e) {

  let keyCode;
  if (e.type === 'keydown') {
    keyCode = e.keyCode;
  } else {
    keyCode = this.getAttribute('data-key');
  }


  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);


  const pad = document.querySelector(`div[data-key="${keyCode}"]`);


  if (!audio) return;


  pad.classList.add('playing');


  audio.currentTime = 0;


  audio.play();
}


function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

let startButton = document.getElementById("start-beat");
startButton.addEventListener("click", beatBox);

function beatBox() {
  function simulateKey(keyCode) {
      
      let event = new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          keyCode: keyCode
      });
      
      document.dispatchEvent(event);
  }

  function playBump(keyCode, time) {
      return new Promise((resolve) => {
          setTimeout(() => {
              simulateKey(keyCode);
              resolve();
          }, time);
      });
  }


  playBump(65, 500) 
      .then(() => playBump(83, 500)) 
      .then(() => playBump(68, 500)) 
      .then(() => playBump(90, 500)) 
      .then(() => playBump(69, 500)) 
      .then(() => playBump(81, 500)) 
      .then(() => playBump(87, 500)) 
      .then(() => playBump(88, 500)); 
}
