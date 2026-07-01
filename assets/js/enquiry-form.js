/**
 * Checks a basic email format.
 *
 * This is intentionally simple for a front-end project:
 * it rejects obviously invalid values but does not try to replace real server-side validation.
 */
function isValidEmail(email) {
  return email.includes('@') && email.includes('.');
}

/**
 * Checks that the phone number only contains common phone characters.
 */
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

/**
 * Returns a field-specific error message based on the input id.
 */
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

/**
 * Creates a reusable error message element for a form field.
 *
 * aria-describedby connects the input with its error message for screen readers.
 */
function createFieldError(field) {
  const formField = field.closest('.form-field');
  const errorMessage = document.createElement('p');

  errorMessage.classList.add('form-error');
  errorMessage.id = `${field.id}-error`;

  field.setAttribute('aria-describedby', errorMessage.id);

  formField.appendChild(errorMessage);

  return errorMessage;
}

/**
 * Returns an existing field error element or creates one if it does not exist yet.
 */
function getFieldError(field) {
  const existingError = document.querySelector(`#${field.id}-error`);

  if (existingError) {
    return existingError;
  }

  return createFieldError(field);
}

/**
 * Shows a validation error and marks the field as invalid.
 */
function showFieldError(field, message) {
  const errorMessage = getFieldError(field);

  field.setAttribute('aria-invalid', 'true');
  errorMessage.textContent = message;
}

/**
 * Clears the field error and removes the invalid state.
 */
function clearFieldError(field) {
  const errorMessage = getFieldError(field);

  field.removeAttribute('aria-invalid');
  errorMessage.textContent = '';
}

/**
 * Creates the success message used after valid form submission.
 *
 * role="status" and aria-live="polite" allow assistive technology to announce
 * the success message without interrupting the user.
 */
function createSuccessMessage(enquiryForm) {
  const successMessage = document.createElement('p');
  const submitButton = enquiryForm.querySelector('.enquiry-submit-button');

  successMessage.classList.add('form-success');
  successMessage.hidden = true;
  successMessage.textContent = 'Thank you! Your quote request has been prepared.';
  successMessage.setAttribute('role', 'status');
  successMessage.setAttribute('aria-live', 'polite');

  enquiryForm.insertBefore(successMessage, submitButton);

  return successMessage;
}

/**
 * Returns the existing success message or creates it once.
 */
function getSuccessMessage(enquiryForm) {
  const existingSuccessMessage = document.querySelector('.form-success');

  if (existingSuccessMessage) {
    return existingSuccessMessage;
  }

  return createSuccessMessage(enquiryForm);
}

/**
 * Initialises enquiry form validation and success state.
 */
function initEnquiryForm() {
  const enquiryForm = document.querySelector('.enquiry-form');
  const enquirySection = document.querySelector('#enquiry');

  if (!enquiryForm) {
    return;
  }

  const requiredFields = enquiryForm.querySelectorAll('[required]');
  const successMessage = getSuccessMessage(enquiryForm);

  enquiryForm.addEventListener('submit', (event) => {
    // Prevents the browser from submitting/reloading the page.
    // This project uses simulated front-end submission.
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

      if (enquirySection) {
        enquirySection.classList.add('is-submitted');
      }

      // Notifies estimate.js that the enquiry flow is complete and the estimate can reset.
      document.dispatchEvent(new CustomEvent('enquiry:submitted'));

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
