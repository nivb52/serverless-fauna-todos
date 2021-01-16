import useUser from '../../hooks/useUser';
const netlifyIdentity = require('netlify-identity-widget');
const handler = {
  is_init: false,
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log(
        this.is_init ? 'iam already connected' : 'iam service started'
      ); //, ...arguments);
      // if (this.is_init) return () => (this.getCurrentUSer());
      this.is_init = true;
    }
    return Reflect.get(...arguments);
  },
};

const iam = new Proxy(netlifyIdentity, handler);

iam.on('init', (user) => {
  useUser(user);
});

iam.on('login', (user) => {
  useUser(user);
  iam.close();
});

iam.on('logout', () => {
  useUser();
  iam.close();
});

export default iam;
