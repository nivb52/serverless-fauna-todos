import React, { useEffect } from 'react';
import { Container, Flex, Heading, Button } from 'theme-ui';
import Menu from '../cmps/Menu';
import auth from '../services/iam';

import useStore from '../store';

export default (props) => {
  useEffect(() => {
    auth.init({});
    auth.on('login', (user) => {
      console.clear();
      console.log('login', user);
      login(user);
    });
  });

  const login = useStore((state) => state.setUser);
  const logout = useStore((state) => state.setUser);

  return (
    <Container>
      <Menu></Menu>

      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Heading as="h1"> Getting Staff Done</Heading>

        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            auth.open();
          }}>
          Log In
        </Button>
      </Flex>
    </Container>
  );
};
