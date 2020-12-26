import React from 'react';
import { Flex, NavLink } from 'theme-ui';
import { Link } from 'gatsby';

export default () => {
  return (
    <Flex as="nav">
      <NavLink as={Link} to="/" p={3}>
        Home
      </NavLink>
      <NavLink as={Link} to="/app" p={3}>
        Dashboard
      </NavLink>
    </Flex>
  );
};
