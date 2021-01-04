import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import useUser from '../hooks/useIam';
import store from '../store';
import { DashLoggedOut, DashLogin } from '../cmps/LoginLogout';
const { subscribe } = store;

const App = ({ children }) => {
  //   const Heading = `<Heading as="h1">Get Stuff Done</Heading>;`

  useUser();
  let [isUser, setIsUser] = useState(false);
  let [fullName, setFullName] = useState('');

  const listenerIsUser = (user, previousUser) => {
    console.log(user);
    setIsUser(!!user);
    setFullName(
      user && user.hasOwnProperty('user_metadata')
        ? user.user_metadata.full_name
        : null
    );
  };
  const unsub_user = store.subscribe(listenerIsUser, (state) => state.user);

  if (!isUser) {
    return (
      <Router>
        <DashLogin path="/app" />
      </Router>
    );
  }

  return (
    <Router>
      <DashLoggedOut path="/app" fullName={fullName} />
    </Router>
  );
};

export default App;
