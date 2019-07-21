// let sound = new Audio()
// const play = document.getElementById('piano-keys');
// play.addEventListener('click', playSound);

// function playSound() {
//     sound.src = 'sounds/1.mp3'
//     sound.play()
// };

//let sound2 = new Audio()
//const play2 = document.getElementById('piano-key-S');
//play2.addEventListener('click', playSound2);
//
//function playSound2() {
//    sound2.src = 'sounds/2.mp3'
//    sound2.play()
//};

function play(sound){
    const audio = document.getElementById("audio");
          audio.setAttribute('src', sound);
          audio.play();
 }

 function playNote(n){
    const note = document.querySelector(`audio[data-key="${n.keyCode}"]`);
          note.play();
 
}
window.addEventListener('keydown', playNote);