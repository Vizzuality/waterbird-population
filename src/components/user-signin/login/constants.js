export const RECOVER_PASSWORD_EMAIL_DETAILS = {
  mailto: 'wpe@wetlands.org',
  body: {
    head: 'Hello,',
    core:
      ' to create a new password for the Waterbirds platform, send this email indicating your user name. We’ll send you an email with the instructions to set up a new password. Please, send this email from the same address you used to register on the platform so we can verify your identity.',
    username: 'User name:',
  },
  subject: 'Password reminder',
};

export const defaultRegistrationForm = {
  name: '',
  password: '',
  email: '',
  company: '',
  comments: '',
};

export const defaultLoginForm = {
  email: '',
  password: '',
};

export default RECOVER_PASSWORD_EMAIL_DETAILS;
