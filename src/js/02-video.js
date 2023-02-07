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
      })
      .catch(function (error) {
        console.log(error);
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
        console.log(
          'The time was less than 0 or greater than the video’s duration'
        );
        break;

      default:
        console.log(`Some other error occurred: ${error}`);
        break;
    }
  });
