import React, { useState } from 'react';
import { Flex, NavLink } from 'theme-ui';
import { Link } from 'gatsby';
import iam from '../services/iam';
import useStore from '../store';
import { DashLoggedOut, DashLogin } from '../cmps/LoginLogout';

export default () => {
  const user = iam.currentUser();
  let full_name = iam.getUserFullName();
  console.log({ full_name });

  return (
    <Flex as="header" sx={{ justifyContent: 'space-between' }}>
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
      </Flex>
      <Flex as="nav">
        {user && <DashLoggedOut fullName={full_name} />}
        {!user && (
          <DashLogin
            fullName={full_name}
            onClick={() => {
              iam.open();
            }}
          />
        )}
      </Flex>
    </Flex>
  );
};
