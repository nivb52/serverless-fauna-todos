const netlifyIdentity = require('netlify-identity-widget');

const handler = {
  __hold_user__: {},
  getUserFullName: (user) => {
    return user ? user.user_metadata.full_name : null;
  },
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log('init iam service');
    } else if (prop === 'login') {
      this.__hold_user__ = user;
    } else if (prop === 'logout') {
      this.__hold_user__ = {};
    } else if (prop === 'getUserFullName') {
      const user = this.__hold_user__;
      console.log('getUserFullName Proxy');
      return this.getUserFullName(user);
    }
    return Reflect.get(...arguments);
  },
};

const iam = new Proxy(netlifyIdentity, handler);
export default iam;
