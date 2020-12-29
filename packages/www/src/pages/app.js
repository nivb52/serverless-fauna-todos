import React from 'react';
// import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import { Container, Flex, Heading, Button, NavLink } from 'theme-ui';
import useStore from '../store';
import iam from '../services/iam';
import useUser from '../hooks/useIam';

let Dash = ({ fullName }) => {
  let full_name = fullName;

  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        {full_name && <span> - {full_name}</span>}
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            iam.logout();
          }}>
          Logout
        </Button>
      </Flex>
    </Container>
  );
};

let DashLoggedOut = ({ fullName }) => {
  let full_name = fullName;

  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        {full_name && <span> - {full_name}</span>}
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            iam.open();
          }}>
          Log In
        </Button>
      </Flex>
    </Container>
  );
};

const App = ({ children }) => {
  useUser();
  const user = useStore.subscribe((console.log, (state) => state.user));
  const fullName = iam.getUserFullName;
  if (!user) {
    return (
      <Router>
        <Dash path="/app" fullName={fullName} />
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
