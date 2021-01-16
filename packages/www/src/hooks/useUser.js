import { useEffect, useState } from 'react';
import store from '../store';
import useIam from './useIam';
import { isNotEmpty } from '../services/utills';

const store_user = store.getState().user;

export default function useUser(user) {
  let [fullName, setFullName] = useState('');
  let [isUser, setIsUser] = useState('');
  useIam();
  useEffect(() => {
    listenerIsUser(store_user);
  }, []);

  const listenerIsUser = (user, previousUser) => {
    console.log('listen user ', user);
    setIsUser(isNotEmpty(user));
    if (user) {
      setFullName(
        user.hasOwnProperty('user_metadata')
          ? user.user_metadata.full_name
          : null
      );
    }
  };
  const unsubUser = store.subscribe(listenerIsUser, (state) => state.user);

  return fullName;
}
