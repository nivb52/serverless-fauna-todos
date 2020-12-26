import React from 'react';
import useStore from '../store';

// const Dashboard = () => {
//   const user = useStore((state) => state.user);
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// };

const App = ({ children }) => {
  const user = useStore((state) => state.user);
  let full_name;
  if (user) full_name = user_metadata.full_name;
  return (
    <div>
      <h2>
        Dashboard
        <span>{full_name}</span>
      </h2>
    </div>
  );
};

export default App;
