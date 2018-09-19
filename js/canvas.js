const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //need context for drawing, 3d is used for video games
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 7;

let isDrawing = false;

let lastX = 0;
let lastY = 0; // declare x and y variables where the line should start

function draw(e) { //function that runs whenever we move the mouse on top of the canvas
    if(!isDrawing) return; //stop the fn from running when they are not moused
    console.log(e);
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    [lastX, lastY] = [e.offsetX, e.offsetY]; //destructuring an array
}
 canvas.addEventListener('mousemove', draw);
 canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; //update starting point

 });
 canvas.addEventListener('mouseup', () => isDrawing = false);
 canvas.addEventListener('mouseout', () => isDrawing = false);
