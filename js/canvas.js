const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //need context for drawing, 3d is used for video games
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;

let lastX = 0;
let lastY = 0; // declare x and y variables where the line should start

function draw(e) { //function that runs whenever we move the mouse on top of the canvas
    if(!isDrawing) return; //stop the fn from running when they are not moused
    console.log(e);
}
 canvas.addEventListener('mousemove', draw);