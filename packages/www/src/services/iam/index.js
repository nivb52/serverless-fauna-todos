const { isNotEmpty } = require('../utills');
const netlifyIdentity = require('netlify-identity-widget');

const getUserFullName = (user) => {
  return user && user.user_metadata ? user.user_metadata.full_name : null;
};

const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'getUser') {
      return target.currentUser;
    } else if (prop === 'getUserFullName') {
      return getUserFullName(target.currentUser());
    } else if (prop === 'getIsUser') {
      return isNotEmpty(target.currentUser());
    }
    return Reflect.get(...arguments);
  },
};

const iam = new Proxy(netlifyIdentity, handler);
iam.on('init', (user) => {});

iam.on('login', (user) => {
  iam.close();
});

iam.on('logout', () => {
  iam.close();
});

export default iam;
