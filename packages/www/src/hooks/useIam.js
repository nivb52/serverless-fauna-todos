import React from 'react';
import iam from '../services/iam';
import useStore from '../store';

export default function useUser() {
  const storeLogin = useStore((state) => state.setUser);
  const storeLogout = useStore((state) => state.setUser);

  React.useEffect(() => {
    iam.init({});
    iam.on('init', (user) => storeLogin(user || {}));
    iam.on('login', (user) => {
      iam.close();
      storeLogin(user);
    });
    iam.on('logout', () => storeLogout());
  });
}
