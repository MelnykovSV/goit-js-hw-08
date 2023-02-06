const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

// load from storage
window.addEventListener('load', e => {
  //Можливо, треба було б провести перевірку, чи є там якісь значення, але наче воно й так не видає ніяких помилок

  form.querySelector('input').value = localStorage.getItem('email');
  form.querySelector('textarea').value = localStorage.getItem('message');
  if (
    localStorage.hasOwnProperty('email') ||
    localStorage.hasOwnProperty('message')
  ) {
    form.querySelector('input').value = localStorage.getItem('email');
    form.querySelector('textarea').value = localStorage.getItem('message');
    // console.log('there is something');
  } else {
    // console.log('there is nothing');
  }
});

// write to storage
form.addEventListener(
  'input',
  throttle(e => {
    localStorage.setItem(e.target.name, e.target.value);
    // console.log(`${e.target.name} value: ${e.target.value}`);
  }, 500)
);

// submit and clear storage
form.addEventListener('submit', e => {
  e.preventDefault();

  // =============================Проверить  заполнение всех полей!======================================

  const formData = new FormData(e.currentTarget);
  for (item of [...formData]) {
    localStorage.removeItem(item[0]);
    console.log(`${item[0]} value: ${item[1]}`);
  }

  form.reset();
});
