import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import iam from '../services/iam';
import useUser from '../hooks/useIam';
import { DashLoggedOut, DashLogin } from '../cmps/LoginLogout';

const App = ({ children }) => {
  //   const Heading = `<Heading as="h1">Get Stuff Done</Heading>;`
  useUser();
  const user = iam.currentUser();
  let full_name = iam.getUserFullName();
  console.log({ full_name });

  if (!user) {
    return (
      <Router>
        <DashLogin path="/app" />
      </Router>
    );
  }

  return (
    <Router>
      <DashLoggedOut path="/app" fullName={full_name} />
    </Router>
  );
};

export default App;
