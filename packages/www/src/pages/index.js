import React, { useEffect } from 'react';
import { Container, Flex, Heading, Button } from 'theme-ui';
import Menu from '../cmps/Menu';
import useUser from '../hooks/useIam';

export default (props) => {
  useUser();

  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Menu></Menu>
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          Getting Staff Done
        </Heading>
      </Flex>
    </Container>
  );
};
