import store from '../../store';
const netlifyIdentity = require('netlify-identity-widget');
const handler = {
  is_init: false,
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log(this.is_init ? 'iam connected already' : 'init iam service'); //, ...arguments);
      if (this.is_init) return null;
      else this.is_init = true;
    }
    return Reflect.get(...arguments);
  },
};

const iam = new Proxy(netlifyIdentity, handler);
const { setState } = store;

iam.on('init', (user) => {
  if (user)
    setState((set) => {
      set.setUser(user);
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
