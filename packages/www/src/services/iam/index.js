const netlifyIdentity = require('netlify-identity-widget');

const handler = {
  getUserFullName: (user) => {
    console.log(user);
    return user?.user_metadata?.full_name;
  },
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log('init iam service');
    } else if (prop === 'login') {
    } else if (prop === 'logout') {
    } else if (prop === 'getUserFullName') {
      const user = target.currentUser();
      console.log(target);

      return this.getUserFullName(user);
    }
    return Reflect.get(...arguments);
  },
};

const iam = new Proxy(netlifyIdentity, handler);
export default iam;
