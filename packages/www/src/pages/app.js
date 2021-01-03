import React from 'react';
import { Router } from '@reach/router';
import useUser from '../hooks/useIam';
import useStore from '../store';
import { DashLoggedOut, DashLogin } from '../cmps/LoginLogout';
const { subscribe } = useStore;

const App = ({ children }) => {
  //   const Heading = `<Heading as="h1">Get Stuff Done</Heading>;`
  useUser();
  let is_user;
  const unsub_user = useStore.subscribe(
    (user) => (is_user = !!state.user),
    (state) => state.user
  );
  let full_name = unsub_user ? unsub_user : '';
  // console.log(full_name);

  if (!is_user) {
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
