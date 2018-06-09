function drumkitHandler(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running all together
    audio.currentTime = 0; //rewind to the start when we press the same key quickly
    audio.play();
    key.classList.add('playing'); //add a class with transition effects
}

//Set up end for transition effects
function removeTransition(e) {
 if(e.propertyName !== 'transform') return; // skip it if it's not a transform
 this.classList.remove('playing');
} 
const keys = document.querySelectorAll('.key'); 
keys.forEach( key => key.addEventListener('transitionend', removeTransition)); 

function enableDrumkit() {
    window.addEventListener('keydown', drumkitHandler(e));
}

function disableDrumkit() {
    window.removeEventListener('keydown', drumkitHandler(e));
}

//Version 1
// var  section = document.getElementById('letters');
// // var top = section.offsetTop;
// // var bottom = section.offsetBottom;
// var box = section.offsetHeight;
// window.addEventListener("scroll", function() {
//     //if (window.pageYOffset <= top || window.pageYOffset >= bottom) {
//      if (window.pageYOffset <= box || window.pageYOffset >= box) {
//      enableDrumkit()
//     } else {
//      disableDrumkit()
//     }
// });

//Version 2
// var  section = document.getElementById('letters');
// var top = section.offsetTop;
// var bottom = section.offsetBottom;
// window.addEventListener("scroll", function() {
//     if (window.pageYOffset <= top || window.pageYOffset >= bottom) {
//      enableDrumkit()
//     } else {
//      disableDrumkit()
//     }
// });

//Version 3
// var  section = document.getElementById('letters');
// var box = section.offsetHeight
// window.addEventListener("scroll", function(e) {
//      let box = section.offsetHeight;
//      if (window.pageYOffset >= box.top) {
//      enableDrumkit()
//     } else {
//      disableDrumkit()
//     }
// });