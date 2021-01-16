import React from 'react';
import { Flex, NavLink } from 'theme-ui';
import { Link } from 'gatsby';

import iam from '../services/iam';
import { DashLoggedOut, DashLogin } from '../cmps/LoginLogout';

export default ({ isUser, fullName }) => {
  return (
    <Flex as="header" sx={{ justifyContent: 'space-between' }}>
      <Flex as="nav">
        <NavLink as={Link} to="/" p={2}>
          Home
        </NavLink>

        {isUser && (
          <NavLink as={Link} to={'/app'} p={2}>
            Dashboard
          </NavLink>
        )}
        {fullName && (
          <NavLink href="#!" p={2}>
            {fullName}
          </NavLink>
        )}
      </Flex>
      <Flex as="nav">
        {isUser && <DashLoggedOut fullName={fullName} />}
        {!isUser && (
          <DashLogin
            onClick={() => {
              iam.open();
            }}
          />
        )}
      </Flex>
    </Flex>
  );
};
