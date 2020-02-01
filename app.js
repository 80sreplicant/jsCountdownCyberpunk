// Set the date you're counting down to
let countdown = new Date('September 17, 2020 00:00:00').getTime();
// update the count down every 1 second
const x = setInterval(function() {
  // get todays date and time
  const now = new Date().getTime();
  // find the distance between now and the count down date
  const distance = countdown - now;
  // Time calculation for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with the id's
  document.querySelector('#days').innerHTML = days;
  document.querySelector('#hours').innerHTML = hours;
  document.querySelector('#minutes').innerHTML = minutes;
  document.querySelector('#seconds').innerHTML = seconds;
  // if the countdown is finished, clear it
  if (distance <= 0) {
    clearInterval(x);
  }
}, 1000);
