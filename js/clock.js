const secondHand = document.querySelector ('.second-hand');
const minutesHand = document.querySelector ('.min-hand');
const hoursHand = document.querySelector ('.hour-hand');
function setDate() {
 const now = new Date();
 const seconds = now.getSeconds();
 const secondsDegrees = ((seconds / 60) * 360) + 90; // + 90 because we set it to 90 deg in css
 secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
 const minutes = now.getMinutes();
 const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
 minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
 const hours = now.getHours();
 const hoursDegrees = ((hours / 12) * 360) + ((seconds/60)*6) + 90;
 hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);