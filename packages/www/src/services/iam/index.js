const { isNotEmpty } = require('../utills');
const netlifyIdentity = require('netlify-identity-widget');

let curr_user = netlifyIdentity.currentUser();
export function user() {
  return {
    setUser: (user) => (curr_user = user),
    getUser: () => curr_user,
    getIsUser: () => isNotEmpty(curr_user),
    getUserFullName: () => {
      const user = curr_user;
      return user && user.user_metadata ? user.user_metadata.full_name : null;
    },
  };
}

const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'getUser') {
      return target.currentUser;
    } else if (prop === 'getUserFullName') {
      const user = target.currentUser();
      return user && user.user_metadata ? user.user_metadata.full_name : null;
    } else if (prop === 'getIsUser') {
      return isNotEmpty(target.currentUser());
    }
    return Reflect.get(...arguments);
  },
};

const iam = new Proxy(netlifyIdentity, handler);
const { setUser } = user();
iam.on('init', (user) => {});

iam.on('login', (user) => {
  iam.close();
});

iam.on('logout', () => {
  iam.close();
});

export default iam;
