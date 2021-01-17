import React from 'react';
import { Container, Flex, Heading } from 'theme-ui';
import Menu from '../cmps/Menu';
import { user } from '../services/iam';
import useIam from '../hooks/useIam';

export default (props) => {
  let iam = useIam();
  const { getIsUser, getUserFullName } = user();
  const isUser = getIsUser();
  const fullName = getUserFullName();
  console.log(iam.getUserFullName);
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
