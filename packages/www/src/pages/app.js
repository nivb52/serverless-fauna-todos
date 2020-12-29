import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import useStore from '../store';
import iam from '../services/iam';
import useUser from '../hooks/useIam';
import { DashLoggedOut, DashLogin } from '../cmps/LoginLogout';

const App = ({ children }) => {
  //   const Heading = `<Heading as="h1">Get Stuff Done</Heading>;`
  useUser();
  const [user, setUser] = useState();
  let subscribeUser = useStore.subscribe((setUser, (state) => state.user));
  const fullName = iam.getUserFullName;
  subscribeUser();
  console.log('App', { user });

  if (!user) {
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
