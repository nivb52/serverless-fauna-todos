import { useEffect, useState } from 'react';
import iam from '../services/iam';

export default function useIam() {
  const [is_inited, setIsInited] = useState(false);
  useEffect(() => {
    try {
      if (!is_inited) {
        iam.init({});
        setIsInited(true);
      }
    } catch (error) {
      console.warn(error);
    }
  }, []);
  return iam;
}
