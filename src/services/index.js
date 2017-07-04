const authManagement = require('./auth-management/auth-management.service.js');
const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
const email = require('./email/email.service.js');
const settings = require('./settings/settings.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(authManagement);
  app.configure(messages);
  app.configure(users);
  app.configure(email);
  app.configure(settings);
};
