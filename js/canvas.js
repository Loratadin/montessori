const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //need context for drawing, 3d is used for video games
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;