import React from 'react';
import { Container, Flex, Heading, Button } from 'theme-ui';
import iam from '../services/iam';

export let DashLoggedOut = ({ fullName, padding = 0 }) => {
  let full_name = fullName;

  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding }}>
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
