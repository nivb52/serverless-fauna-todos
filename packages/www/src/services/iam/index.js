const { isNotEmpty } = require('../utills');
const netlifyIdentity = require('netlify-identity-widget');

export function user() {
  let curr_user = {};
  return {
    setUser: (user) => (curr_user = user),
    getUser: () => curr_user,
    getIsUser: () => isNotEmpty(curr_user),
    getUserFullName: () => {
      const user = console.log(curr_user);
      return user && user.user_metadata ? user.user_metadata.full_name : null;
    },
  };
}

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
const { setUser } = user();
iam.on('init', (user) => {
  setUser(user);
});

iam.on('login', (user) => {
  setUser(user);
  iam.close();
});

iam.on('logout', () => {
  setUser();
  iam.close();
});

export default iam;
