const netlifyIdentity = require('netlify-identity-widget');

const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log('init iam service');
    } else if (prop === 'login') {
    } else if (prop === 'logout') {
    }
    return Reflect.get(...arguments);
  },
};

const iam = new Proxy(netlifyIdentity, handler);
export default iam;
