import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//Writes current player time to local storage

player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);
        // console.log(`Current tims: ${seconds}`);
      })
      .catch(function (error) {
        // an error occurred
      });
  }, 1000)
);

//Sets player time on window load

player
  .setCurrentTime(parseFloat(localStorage.getItem('videoplayer-current-time')))
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
