const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const button = document.querySelector('.submit');

// load from storage
window.addEventListener('load', e => {
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

    // localStorage.setItem(item[0], item[1]);
    // const formData = new FormData(e.currentTarget);
    // for (item of [...formData]) {
    //   localStorage.setItem(item[0], item[1]);
    // }

    // console.log(`Email value: ${localStorage.getItem('email')}`);
    // console.log(`Message value: ${localStorage.getItem('message')}`);
  }, 2000)
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

// form.addEventListener(
//     'input',
//     throttle(e => {
//       const formData = new FormData(e.currentTarget);
//       for (item of [...formData]) {
//         localStorage.setItem(item[0], item[1]);
//       }

//       console.log(`Email value: ${localStorage.getItem('email')}`);
//       console.log(`Message value: ${localStorage.getItem('message')}`);
//     }, 500)
//   );
