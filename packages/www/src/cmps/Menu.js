import React from 'react';
import { Flex, NavLink, Button } from 'theme-ui';
import { Link } from 'gatsby';
import iam from '../services/iam';
import useStore from '../store';

export default () => {
  const user = useStore.subscribe((console.log, (state) => state.user));
  let full_name;
  if (user) full_name = user.user_metadata?.full_name;

  return (
    <Flex as="nav">
      <NavLink as={Link} to="/" p={2}>
        Home
      </NavLink>
      <NavLink as={Link} to={'/app'} p={2}>
        Dashboard
      </NavLink>
      {full_name && (
        <NavLink href="#!" p={2}>
          {full_name}
        </NavLink>
      )}

      <Button
        sx={{ marginTop: 2 }}
        onClick={() => {
          iam.open();
        }}>
        Log In
      </Button>
    </Flex>
  );
};
