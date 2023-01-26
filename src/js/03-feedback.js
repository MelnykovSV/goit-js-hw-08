const form = document.querySelector('.feedback-form');
form.addEventListener('input', e => {
  console.log(e.target.value);
});
