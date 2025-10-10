const formData = { email: '', message: '' };

const regForm = document.querySelector('.feedback-form');
const emailValue = document.querySelector('[name="email"]');
const messageValue = document.querySelector('[name="message"]');

const saveLocalStorage = localStorage.getItem('feedback-form-state');
const parseLocalStorage = JSON.parse(saveLocalStorage);

if (parseLocalStorage && parseLocalStorage.email && parseLocalStorage.message) {
  emailValue.value = parseLocalStorage.email;
  messageValue.value = parseLocalStorage.message;
  formData.email = parseLocalStorage.email;
  formData.message = parseLocalStorage.message;
}

regForm.addEventListener('input', () => {
  formData.email = regForm.elements.email.value.trim();
  formData.message = regForm.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
console.log(formData);

regForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    emailValue.value = '';
    messageValue.value = '';
  }
});
