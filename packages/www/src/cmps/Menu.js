import React, { useState } from 'react';
import { Flex, NavLink } from 'theme-ui';
import { Link } from 'gatsby';
import store from '../store';
import iam from '../services/iam';
import { DashLoggedOut, DashLogin } from '../cmps/LoginLogout';

export default () => {
  let [isUser, setIsUser] = useState(false);
  let [fullName, setFullName] = useState('');

  const listenerIsUser = (user, previousUser) => {
    console.log(user);
    setIsUser(!!user);
    setFullName(
      user && user.hasOwnProperty('user_metadata')
        ? user.user_metadata.full_name
        : null
    );
  };
  const unsub_user = store.subscribe(listenerIsUser, (state) => state.user);

  return (
    <Flex as="header" sx={{ justifyContent: 'space-between' }}>
      <Flex as="nav">
        <NavLink as={Link} to="/" p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to={'/app'} p={2}>
          Dashboard
        </NavLink>
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
            fullName={fullName}
            onClick={() => {
              iam.open();
            }}
          />
        )}
      </Flex>
    </Flex>
  );
};
