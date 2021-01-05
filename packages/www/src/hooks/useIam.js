import { useEffect, useState } from 'react';
import iam from '../services/iam';

export default function useUser() {
  const [is_init, setIsInit] = useState(false);
  // const [user, setUser] = useState({});

  useEffect(() => {
    if (!is_init) {
      iam.init({});
      setIsInit(true);
    }
  });

  // return user;
}
