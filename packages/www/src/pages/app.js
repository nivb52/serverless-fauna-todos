import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import useUser from '../hooks/useIam';
import store from '../store';
import { isNotEmpty } from '../services/utills';

import { DashLoggedOut, DashLogin } from '../cmps/LoginLogout';
import Menu from '../cmps/Menu';

const App = ({ children }) => {
  //   const Heading = `<Heading as="h1">Get Stuff Done</Heading>;`

  let [isUser, setIsUser] = useState(false);
  let [fullName, setFullName] = useState('');

  const listenerIsUser = (user, previousUser) => {
    console.log('app: ', user);
    setIsUser(isNotEmpty(user));
    setFullName(
      user && user.hasOwnProperty('user_metadata')
        ? user.user_metadata.full_name
        : null
    );
  };
  useUser();
  const unsubUser = store.subscribe(listenerIsUser, (state) => state.user);
  useEffect(() => {
    return () => {
      unsubUser();
    };
  }, [fullName]);

  // if (!isUser) {
  //   return (
  //     <Router>
  //       <DashLogin path="/app" />
  //     </Router>
  //   );
  // }

  // return (
  //   <Router>
  //     <DashLoggedOut path="/app" fullName={fullName} />
  //   </Router>
  // );

  return <Menu></Menu>;
};

export default App;
