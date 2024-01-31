const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const email = event.currentTarget.elements.email.value.trim();
  const message = event.currentTarget.elements.message.value.trim();

  const data = {
    email: email,
    message: message,
  }

  saveToLS(STORAGE_KEY, data)
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const message = event.target.elements.message.value.trim();

  if (!email || !message) {
    alert('All form fields must be filled in');
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function restoreData() {
  const data = loadFromLS(STORAGE_KEY) || {};

  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

restoreData();
