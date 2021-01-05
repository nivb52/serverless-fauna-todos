import { useEffect, useState } from 'react';
import iam from '../services/iam';

export default function useUser() {
  useEffect(() => {
    try {
      iam.init({});
    } catch (error) {
      console.log(error);
    }
  }, []);
}
