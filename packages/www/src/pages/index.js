import React from 'react';
import { Container, Flex, Heading, Button } from 'theme-ui';
export default (props) => (
  <Container>
    <Flex sx={{ flexDirection: 'column', padding: 3 }}>
      <Heading as="h1"> Getting Staff Done</Heading>
      <Button sx={{ marginTop: 2 }}>Log In</Button>
    </Flex>
  </Container>
);
