import React from 'react';
import { Container, Flex, Heading } from 'theme-ui';
import Menu from '../cmps/Menu';
import useUser from '../hooks/useUser';

export default (props) => {
  const fullName = useUser();
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Menu isUser={!!fullName} fullName={fullName}></Menu>
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          Getting Staff Done
        </Heading>
      </Flex>
    </Container>
  );
};
