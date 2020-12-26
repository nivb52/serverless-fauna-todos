import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import useStore from '../store';
// import auth from '../services/iam';

const Dash = () => {
  const user = useStore((state) => state.user);
  let full_name;
  if (user) full_name = user?.user_metadata?.full_name;

  return (
    <div>
      <h2>Dashboard {full_name && <span> - {full_name}</span>}</h2>
    </div>
  );
};

const App = ({ children }) => {
  const user = useStore((state) => state.user);
  return (
    <Router>
      <Dash path="/app" />
    </Router>
  );
};

export default App;
