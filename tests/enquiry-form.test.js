const { isValidEmail, initEnquiryForm } = require('../assets/js/enquiry-form');

function setupEnquiryFormDom() {
  document.body.innerHTML = `
    <form class="enquiry-form" novalidate>
      <div class="form-field">
        <label for="customer-first-name">First name</label>
        <input id="customer-first-name" name="customer-first-name" type="text" required />
      </div>

      <div class="form-field">
        <label for="customer-email">Email</label>
        <input id="customer-email" name="customer-email" type="email" required />
      </div>

      <div class="form-field">
        <label for="customer-message">Message</label>
        <textarea id="customer-message" name="customer-message" required></textarea>
      </div>

      <button class="enquiry-submit-button" type="submit">Submit enquiry</button>
    </form>
  `;

  initEnquiryForm();

  return {
    enquiryForm: document.querySelector('.enquiry-form'),
    firstNameInput: document.querySelector('#customer-first-name'),
    emailInput: document.querySelector('#customer-email'),
    messageInput: document.querySelector('#customer-message'),
  };
}

test('validates email format', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
  expect(isValidEmail('wrong-email')).toBe(false);
});

test('shows error messages when required enquiry fields are empty', () => {
  const { enquiryForm, firstNameInput, emailInput, messageInput } = setupEnquiryFormDom();

  enquiryForm.dispatchEvent(new Event('submit'));

  expect(document.querySelector('#customer-first-name-error').textContent).toBe('Please enter your first name.');
  expect(document.querySelector('#customer-email-error').textContent).toBe('Please enter your email address.');
  expect(document.querySelector('#customer-message-error').textContent).toBe('Please tell us about your event.');

  expect(firstNameInput.getAttribute('aria-invalid')).toBe('true');
  expect(emailInput.getAttribute('aria-invalid')).toBe('true');
  expect(messageInput.getAttribute('aria-invalid')).toBe('true');
});

test('shows email error when email format is invalid', () => {
  const { enquiryForm, firstNameInput, emailInput, messageInput } = setupEnquiryFormDom();

  firstNameInput.value = 'Viktor';
  emailInput.value = 'wrong-email';
  messageInput.value = 'Birthday balloon setup';

  enquiryForm.dispatchEvent(new Event('submit'));

  expect(document.querySelector('#customer-email-error').textContent).toBe('Please enter a valid email address.');
  expect(emailInput.getAttribute('aria-invalid')).toBe('true');
});

test('shows success message when enquiry form is valid', () => {
  const { enquiryForm, firstNameInput, emailInput, messageInput } = setupEnquiryFormDom();

  firstNameInput.value = 'Viktor';
  emailInput.value = 'test@example.com';
  messageInput.value = 'Birthday balloon setup';

  enquiryForm.dispatchEvent(new Event('submit'));

  const successMessage = document.querySelector('.form-success');

  expect(successMessage).not.toBeNull();
  expect(successMessage.hidden).toBe(false);
  expect(successMessage.textContent).toBe('Thank you! Your quote request has been prepared.');
});
