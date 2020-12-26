import React from 'react';
import iam from '../services/iam';
import useStore from '../store';

export default function useUser() {
  const login = useStore((state) => state.setUser);
  const logout = useStore((state) => state.setUser);

  React.useEffect(() => {
    iam.init({});
    iam.on('init', (user) => login(user || {}));
    iam.on('login', (user) => {
      iam.close();
      login(user);
    });
    iam.on('logout', () => logout());
  });
}
