import React from 'react';
import { Container, Flex, Button } from 'theme-ui';
import iam from '../services/iam';

export let DashLoggedOut = ({ fullName, padding = 0 }) => {
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding }}>
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

export let DashLogin = ({ padding = 0 }) => {
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding }}>
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
