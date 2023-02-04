const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

// load from storage
window.addEventListener('load', e => {
  //Возможно надо было бы провести проверку на то, есть ли там какие-то значения,  но вроде как и без нее никаких прорблем не возникает
  form.querySelector('input').value = localStorage.getItem('email');
  form.querySelector('textarea').value = localStorage.getItem('message');
});

// write to storage
form.addEventListener(
  'input',
  throttle(e => {
    console.log(e.target.name);
    localStorage.setItem(e.target.name, e.target.value);
    console.log(`${e.target.name} value: ${e.target.value}`);
  }, 500)
);

// submit and clear storage
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  for (item of [...formData]) {
    localStorage.removeItem(item[0], item[1]);
    console.log(`${item[0]} value: ${item[1]}`);
  }

  form.reset();
});
