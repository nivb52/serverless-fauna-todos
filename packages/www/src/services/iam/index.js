const netlifyIdentity = require('netlify-identity-widget');

const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log('init iam service');
    } else if (prop === 'login') {
      console.log(prop);
    } else if (prop === 'logout') {
    }
    try {
      return Reflect.get(...arguments);
    } catch (e) {
      console.log('error while trying to login ', e);
    }
  },
};

const iam = new Proxy(netlifyIdentity, handler);
export default iam;
