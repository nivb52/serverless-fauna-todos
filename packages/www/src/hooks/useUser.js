import { useEffect, useState } from 'react';
import store from '../store';
import useIam from './useIam';
import { isNotEmpty } from '../services/utills';

const store_user = store.getState().user;
const store_user_full_name = store.getState().getUserFullName();

export default function useUser(user) {
  let [fullName, setFullName] = useState(store_user_full_name);
  let [isUser, setIsUser] = useState(isNotEmpty(store_user));

  const listenerIsUser = (store_user, previousUser) => {
    console.log('listen user ', store_user);
    setIsUser(isNotEmpty(store_user));
    if (store_user) {
      setFullName(
        store_user.hasOwnProperty('user_metadata')
          ? store_user.user_metadata.full_name
          : null
      );
    }
  };

  useIam();
  const unsubUser = store.subscribe(listenerIsUser, (state) => state.user);
  useEffect(() => {
    listenerIsUser(store_user);
    return unsubUser;
  }, [fullName, unsubUser]);

  console.log(fullName);
  return isUser ? fullName : '';
}
