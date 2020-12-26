import React from 'react';
import { Flex, NavLink } from 'theme-ui';
import { Link } from 'gatsby';
import useStore from '../store';
//
export default () => {
  const user = useStore((state) => state.user);
  return (
    <Flex as="nav">
      <NavLink as={Link} to="/" p={2}>
        Home
      </NavLink>
      <NavLink as={Link} to="/app" p={2}>
        Dashboard
      </NavLink>
      {user && (
        <NavLink as={Link} to="/" p={2}>
          {user.user_metadata?.full_name}
        </NavLink>
      )}
    </Flex>
  );
};
