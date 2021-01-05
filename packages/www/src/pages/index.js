import React from 'react';
import { Container, Flex, Heading } from 'theme-ui';
import Menu from '../cmps/Menu';

export default (props) => {
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
