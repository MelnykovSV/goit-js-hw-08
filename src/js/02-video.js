import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', function () {
  console.log('counting time');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
