import React from 'react';
// import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import { Container, Flex, Heading, Button, NavLink } from 'theme-ui';
import useStore from '../store';
import iam from '../services/iam';

let Dash = () => {
  const user = useStore((state) => state.user);
  let full_name;
  if (user && user.user_metadata) full_name = user.user_metadata.full_name;

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

let DashLoggedOut = (props) => {
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
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
  const user = useStore((state) => state.user);
  if (!user) {
    return (
      <Router>
        <DashLoggedOut path="/app" />
      </Router>
    );
  }

  return (
    <Router>
      <Dash path="/app" />
    </Router>
  );
};

export default App;
