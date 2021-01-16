import React from 'react';
import { Container, Flex, Heading } from 'theme-ui';
import Menu from '../cmps/Menu';
import useUser from '../hooks/useUser';
import useIam from '../hooks/useIam';

export default (props) => {
  useIam();
  const { isUser, fullName } = useUser();
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Menu isUser={isUser} fullName={fullName}></Menu>
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          Getting Staff Done
        </Heading>
      </Flex>
    </Container>
  );
};
