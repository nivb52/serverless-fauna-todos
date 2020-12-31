const netlifyIdentity = require('netlify-identity-widget');
import useStore from '../store';
const { setUser, resetUser } = useStore();

// const storeLogin = (user) => setUser(user);
// const storeLogout = () => resetUser();

const handler = {
  getUserFullName: () => {
    let user = this.getCurrentUser();
    return user && user.user_metadata ? user.user_metadata.full_name : null;
  },
  isLoggedIn: () => {
    return !!this.getCurrentUser();
  },
  get: function (target, prop, receiver) {
    if (prop === 'init') {
      console.log('init iam service');
    } else if (prop === 'getUserFullName') {
      console.log('getUserFullName Proxy');
      return this.getUserFullName();
    } else if (prop === 'isLoggedIn') {
      console.log('isLoggedIn Proxy');
      return this.isLoggedIn();
    }
    return Reflect.get(...arguments);
  },
};
const iam = new Proxy(netlifyIdentity, handler);
iam.on('init', (user) => setUser(user));
iam.on('login', (user) => {
  iam.close();
  setUser(user);
});
iam.on('logout', () => resetUser());

export default iam;
