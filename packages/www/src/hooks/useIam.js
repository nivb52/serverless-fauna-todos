import { useEffect } from 'react';
import iam from '../services/iam';

export default function useUser() {
  // const [user, setUser] = useState({});

  useEffect(() => {
    iam.init({});
  });

  // return user;
}
