import React, { useEffect } from 'react';
import { Container, Flex, Heading, Button } from 'theme-ui';
// import netlifyIdentity from 'netlify-identity-widget';
import auth from '../services/iam';

export default (props) => {
  useEffect(() => {
    auth.init({});
  });

  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Heading as="h1"> Getting Staff Done</Heading>
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            auth.open();
          }}>
          Log In
        </Button>
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            console.log(auth.currentUser());
          }}>
          current user
        </Button>
      </Flex>
    </Container>
  );
};
