import React from 'react';
// import { Router } from '@reach/router';
// import store from '../store';
import Menu from '../cmps/Menu';

const App = ({ children }) => {
  //   return (
  //     <Router>
  //       <DashLogin path="/app" />
  //     </Router>
  //   );
  // }

  // return (
  //   <Router>
  //     <DashLoggedOut path="/app" fullName={fullName} />
  //   </Router>
  // );

  return <Menu></Menu>;
};

export default App;
