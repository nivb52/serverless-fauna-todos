import React from 'react';
// import { Router } from '@reach/router';
// import store from '../store';
import Menu from '../cmps/Menu';
import useUser from '../hooks/useUser';
import useIam from '../hooks/useIam';
import { Flex, Heading } from 'theme-ui';

const App = ({ children }) => {
  useIam();
  const { isUser, fullName } = useUser();
  if (!isUser)
    return (
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          Unauthrized
        </Heading>
      </Flex>
    );

  // if (!user) {
  //   return (
  //     <Router>
  //       <DashLoggedOut path="/app" />
  //     </Router>
  //   );
  // }
  // return (
  //   <Router>
  //     <Dash path="/app" />
  //   </Router>
  // );

  return <Menu isUser={true} fullName={fullName}></Menu>;
};

export default App;
