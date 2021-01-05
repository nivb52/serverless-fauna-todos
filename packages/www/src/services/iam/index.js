import store from '../../store';
const netlifyIdentity = require('netlify-identity-widget');
const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log('init iam service'); //, ...arguments);
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
