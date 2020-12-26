import React from 'react';
import { Flex, NavLink } from 'theme-ui';
import { Link } from 'gatsby';

export default () => {
  return (
    <Flex as="nav">
      <NavLink as={Link} to="/" p={2}>
        Home
      </NavLink>
      <NavLink as={Link} to="/app" p={2}>
        Dashboard
      </NavLink>
    </Flex>
  );
};
