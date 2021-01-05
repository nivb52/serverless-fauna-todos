import store from '../../store';
const netlifyIdentity = require('netlify-identity-widget');
const handler = {
  is_init: false,
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log(this.is_init, 'init iam service'); //, ...arguments);
      if (this.is_init) return;
      else this.is_init = true;
    }
    return Reflect.get(...arguments);
  },
};

const iam = new Proxy(netlifyIdentity, handler);
const { setState } = store;

iam.on('init', (user) => {
  const current_user = user;
  setState((set) => {
    set.setUser(current_user);
  });
});
iam.on('login', (user) => {
  setState((set) => {
    set.setUser(user);
  });
  iam.close();
});
iam.on('logout', () =>
  setState((set) => {
    set.resetUser();
  })
);

export default iam;
