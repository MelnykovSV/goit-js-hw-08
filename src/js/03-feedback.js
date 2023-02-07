const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

let formObject = {};

// loading object from the local storage if one exists
if (localStorage.getItem('feedback-form-state')) {
  formObject = JSON.parse(localStorage.getItem('feedback-form-state'));
}

// checking items in object and loading values

// ???? Чи можна прибрати цей EventListener? Тоді formData стане глобальною. Тут це ні на що не впливає, але, мені здається, зайві глобальні змінні це не дуже добре. Може замість EventListenerа просто вставити це в функцію? Чи те, що змінна буде глобальною, це неважливо?
window.addEventListener('load', () => {
  const formData = new FormData(form);
  for (formItem of [...formData]) {
    if (formObject[formItem[0]]) {
      form.querySelector(`[name='${formItem[0]}']`).value =
        formObject[formItem[0]];
    }
  }
});

// write to storage
form.addEventListener(
  'input',
  throttle(e => {
    formObject[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
  }, 500)
);

// submit and clear storage
form.addEventListener('submit', e => {
  e.preventDefault();
  const resultingFormObject = {};

  const formData = new FormData(e.currentTarget);
  for (formItem of [...formData]) {
    resultingFormObject[formItem[0]] = formItem[1];
  }
  console.log(resultingFormObject);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
