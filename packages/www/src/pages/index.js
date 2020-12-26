import React, { useEffect } from 'react';
import { Container, Flex, Heading, Button } from 'theme-ui';
import Menu from '../cmps/Menu';
import iam from '../services/iam';
import useUser from '../hooks/useIam';
// import useStore from '../store';

export default (props) => {
  useUser();

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
