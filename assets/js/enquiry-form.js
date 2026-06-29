function isValidEmail(email) {
  return email.includes('@') && email.includes('.');
}

function isValidPhone(phone) {
  for (let character of phone) {
    if (
      character !== ' ' &&
      character !== '+' &&
      character !== '-' &&
      character !== '(' &&
      character !== ')' &&
      !Number.isInteger(Number(character))
    ) {
      return false;
    }
  }

  return true;
}

function getFieldErrorMessage(field) {
  if (field.id === 'customer-first-name') {
    return 'Please enter your first name.';
  }

  if (field.id === 'customer-last-name') {
    return 'Please enter your last name.';
  }

  if (field.id === 'customer-email') {
    return 'Please enter your email address.';
  }

  if (field.id === 'customer-phone') {
    return 'Please enter your phone number.';
  }

  if (field.id === 'event-type') {
    return 'Please select an event type.';
  }

  if (field.id === 'decoration-type') {
    return 'Please select a decoration type.';
  }

  if (field.id === 'event-date') {
    return 'Please select your event date.';
  }

  if (field.id === 'event-location') {
    return 'Please enter your event location.';
  }

  if (field.id === 'customer-message') {
    return 'Please tell us about your event.';
  }

  return 'Please complete this field.';
}

function createFieldError(field) {
  const formField = field.closest('.form-field');
  const errorMessage = document.createElement('p');

  errorMessage.classList.add('form-error');
  errorMessage.id = `${field.id}-error`;

  field.setAttribute('aria-describedby', errorMessage.id);

  formField.appendChild(errorMessage);

  return errorMessage;
}

function getFieldError(field) {
  const existingError = document.querySelector(`#${field.id}-error`);

  if (existingError) {
    return existingError;
  }

  return createFieldError(field);
}

function showFieldError(field, message) {
  const errorMessage = getFieldError(field);

  field.setAttribute('aria-invalid', 'true');
  errorMessage.textContent = message;
}

function clearFieldError(field) {
  const errorMessage = getFieldError(field);

  field.removeAttribute('aria-invalid');
  errorMessage.textContent = '';
}

function createSuccessMessage(enquiryForm) {
  const successMessage = document.createElement('p');
  const submitButton = enquiryForm.querySelector('.enquiry-submit-button');

  successMessage.classList.add('form-success');
  successMessage.hidden = true;
  successMessage.textContent = 'Thank you! Your quote request has been prepared.';

  enquiryForm.insertBefore(successMessage, submitButton);

  return successMessage;
}

function getSuccessMessage(enquiryForm) {
  const existingSuccessMessage = document.querySelector('.form-success');

  if (existingSuccessMessage) {
    return existingSuccessMessage;
  }

  return createSuccessMessage(enquiryForm);
}

function initEnquiryForm() {
  const enquiryForm = document.querySelector('.enquiry-form');

  if (!enquiryForm) {
    return;
  }

  const requiredFields = enquiryForm.querySelectorAll('[required]');
  const successMessage = getSuccessMessage(enquiryForm);

  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let isFormValid = true;

    successMessage.hidden = true;

    for (let field of requiredFields) {
      const fieldValue = field.value.trim();

      clearFieldError(field);

      if (fieldValue === '') {
        showFieldError(field, getFieldErrorMessage(field));
        isFormValid = false;
      } else if (field.type === 'email' && !isValidEmail(fieldValue)) {
        showFieldError(field, 'Please enter a valid email address.');
        isFormValid = false;
      } else if (field.type === 'tel' && !isValidPhone(fieldValue)) {
        showFieldError(field, 'Please enter a valid phone number.');
        isFormValid = false;
      }
    }

    if (isFormValid) {
      successMessage.hidden = false;
      enquiryForm.classList.add('is-submitted');
      enquiryForm.reset();
    }
  });
}

if (typeof module !== 'undefined') {
  module.exports = {
    isValidEmail,
    isValidPhone,
    getFieldErrorMessage,
    initEnquiryForm,
  };
}
