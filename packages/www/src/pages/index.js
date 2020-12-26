import React, { useEffect } from 'react';
import { Container, Flex, Heading, Button } from 'theme-ui';
import Menu from '../cmps/Menu';
import iam from '../services/iam';

import useStore from '../store';

export default (props) => {
  const login = useStore((state) => state.setUser);
  const logout = useStore((state) => state.setUser);

  useEffect(() => {
    iam.init({});
    iam.on('login', (user) => {
      console.clear();
      console.log('login', user);
      login(user);
    });
  });

  return (
    <Container>
      <Menu></Menu>

      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Heading as="h1"> Getting Staff Done</Heading>

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
