import store from '../../store';
const netlifyIdentity = require('netlify-identity-widget');
const handler = {
  is_init: false,
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log(
        this.is_init ? 'iam already connected' : 'iam service started'
      ); //, ...arguments);
      if (this.is_init) return () => ({});
      this.is_init = true;
    }
    return Reflect.get(...arguments);
  },
};

const iam = new Proxy(netlifyIdentity, handler);
const { setState } = store;

iam.on('login', (user) => {
  setState((set) => {
    set.setUser(user);
  });
  iam.close();
});
iam.on('logout', () => {
  setState((set) => {
    set.resetUser();
  });
  iam.close();
});

export default iam;
