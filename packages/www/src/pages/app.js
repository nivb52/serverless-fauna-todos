import React from 'react';
import { Router, Link } from '@reach/router';
import useStore from '../store';
import iam from '../services/iam';
import useUser from '../hooks/useIam';
import { DashLoggedOut, DashLogin } from '../cmps/LoginLogout';

const App = ({ children }) => {
  useUser();
  const user = useStore.subscribe((console.log, (state) => state.user));
  const fullName = iam.getUserFullName;
  //   const Heading = `<Heading as="h1">Get Stuff Done</Heading>;`

  if (!user) {
    return (
      <Router>
        <DashLogin path="/app" fullName={fullName} />
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
