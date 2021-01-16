import { useEffect } from 'react';
import iam from '../services/iam';

export default function useUser(user) {
  useEffect(() => {
    try {
      iam.init({});
    } catch (error) {
      console.warn(error);
    }
  }, []);
}
