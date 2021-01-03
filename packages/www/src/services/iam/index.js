import useStore from '../../store';

const netlifyIdentity = require('netlify-identity-widget');
console.log(useStore);

const handler = {
  getUserFullName: () => {
    let user = this.getCurrentUser();
    return user && user.user_metadata ? user.user_metadata.full_name : null;
  },
  isLoggedIn: (target) => {
    return !!target.getCurrentUser();
  },
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log('init iam service');
    } else if (prop === 'isLoggedIn') {
      this.isLoggedIn(target);
    }
    return Reflect.get(...arguments);
  },
};
const iam = new Proxy(netlifyIdentity, handler);
const { setUser, resetUser } = useStore.getState();

iam.on('init', (user) => setUser(user));
iam.on('login', (user) => {
  console.log('login iam service');
  setUser(user);
  iam.close();
});
iam.on('logout', () => resetUser());

export default iam;
