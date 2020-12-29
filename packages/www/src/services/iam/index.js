const netlifyIdentity = require('netlify-identity-widget');

const handler = {
  getUserFullName: (user) => {
    return user ? user.getUserData() : null;
  },
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log('init iam service');
    } else if (prop === 'login') {
    } else if (prop === 'logout') {
    } else if (prop === 'getUserFullName') {
      const user = target.currentUser();
      console.log('getUserFullName Proxy');
      return this.getUserFullName(user);
    }
    return Reflect.get(...arguments);
  },
};

const iam = new Proxy(netlifyIdentity, handler);
export default iam;
