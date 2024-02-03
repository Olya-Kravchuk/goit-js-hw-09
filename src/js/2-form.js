const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const { name, value } = event.target;

  if (name === 'email' || name === 'message') {
    const data = {
      ...loadFromLS(STORAGE_KEY),
      [name]: value.trim(),
    };

    saveToLS(STORAGE_KEY, data);
  }
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

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
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data) || {};
  } catch (error) {
    console.error('Error loading data from localStorage:', error.message);
    return {};
  }
}

function restoreData() {
  const data = loadFromLS(STORAGE_KEY);

  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

restoreData();