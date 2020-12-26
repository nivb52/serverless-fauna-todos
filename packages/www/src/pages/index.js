import React, { useEffect } from 'react';
import { Container, Flex, Heading, Button } from 'theme-ui';
import Menu from '../cmps/Menu';
import useUser from '../hooks/useIam';

export default (props) => {
  useUser();

  return (
    <Container>
      <Menu></Menu>
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Heading as="h1"> Getting Staff Done</Heading>
      </Flex>
    </Container>
  );
};
