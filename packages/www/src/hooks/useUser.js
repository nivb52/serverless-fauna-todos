import { useEffect, useState } from 'react';
import useIam from './useIam';
import { isNotEmpty } from '../services/utills';

export default function useUser(user = null) {
  let [fullName, setFullName] = useState('');
  let [isUser, setIsUser] = useState(isNotEmpty(user));
  let [curr_user, setCurrUser] = useState(user);

  const getUserFullName = (user) => {
    return user && user.user_metadata ? user.user_metadata.full_name : null;
  };

  useIam();
  useEffect(() => {
    setIsUser(isNotEmpty(user));
    setCurrUser(user);
    setFullName(getUserFullName(user));
  }, [user]);

  console.log('useUser full name', fullName);
  return { isUser, fullName, user: curr_user };
}
