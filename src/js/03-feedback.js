const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

// checking items in local storage and loading values
window.addEventListener('load', () => {
  // ???А навіщо тут проводити перевірку, чи є такий елемент в сховищі? Коли перевірки не було, воно просто підтягувало ті значення що були, а ті, яких не було, не підтягувало.
  // При цьому навіть помилок в консоль не видавало.

  const formData = new FormData(form);
  for (formItem of [...formData]) {
    if (localStorage.getItem(formItem[0])) {
      form.querySelector(`[name='${formItem[0]}']`).value =
        localStorage.getItem(formItem[0]);
    }
  }
});

// write to storage
form.addEventListener(
  'input',
  throttle(e => {
    localStorage.setItem(e.target.name, e.target.value);
  }, 500)
);

// submit and clear storage
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  for (formItem of [...formData]) {
    localStorage.removeItem(formItem[0]);
    console.log(`${formItem[0]} value: ${formItem[1]}`);
  }

  form.reset();
});
