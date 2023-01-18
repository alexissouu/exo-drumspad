
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


  playBump(87, 500) // simulate key W press (snare) after 500ms
    .then(() => playBump(87, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(88, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(88, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(87, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(87, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(88, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(70, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(87, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(69, 250)) // simulate key E press (Kick) after 250ms
    .then(() => playBump(74, 250)) // simulate key E press (Kick) after 250ms
    .then(() => playBump(69, 250)) // simulate key E press (Kick) after 250ms
    .then(() => playBump(76, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(88, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(88, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(77, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(87, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(88, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(78, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(87, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(69, 250)) // simulate key E press (Kick) after 250ms
    .then(() => playBump(80, 250)) // simulate key E press (Kick) after 250ms
    .then(() => playBump(69, 250)) // simulate key E press (Kick) after 250ms
    .then(() => playBump(87, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(88, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(85, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(87, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(87, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(82, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(88, 250)) // simulate key X press (tom) after 250ms
    .then(() => playBump(84, 500)) // simulate key W press (snare) after 500ms
    .then(() => playBump(69, 250)) // simulate key E press (Kick) after 250ms
    .then(() => playBump(69, 250)) // simulate key E press (Kick) after 250ms
    .then(() => playBump(69, 250)) // simulate key E press (Kick) after 250ms

 
}
