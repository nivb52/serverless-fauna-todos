import React, { useEffect, useState } from 'react';
import { Flex, NavLink } from 'theme-ui';
import { Link } from 'gatsby';
import store from '../store';
import iam from '../services/iam';
import { DashLoggedOut, DashLogin } from '../cmps/LoginLogout';
import { isNotEmpty } from '../services/utills';

export default () => {
  let [isUser, setIsUser] = useState(false);
  let [fullName, setFullName] = useState('');

  const listenerIsUser = (user, previousUser) => {
    console.log('listen user ', user);
    setIsUser(isNotEmpty(user));
    setFullName(
      user && user.hasOwnProperty('user_metadata')
        ? user.user_metadata.full_name
        : null
    );
  };

  const unsubUser = store.subscribe(listenerIsUser, (state) => state.user);
  useEffect(() => {
    return () => {
      unsubUser();
    };
  }, [fullName]);

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
