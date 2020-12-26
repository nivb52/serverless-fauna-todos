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

  return (
    <div>
      <h2>
        Dashboard <span>{user}</span>
      </h2>
    </div>
  );
};

export default App;
