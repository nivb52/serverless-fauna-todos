import React from 'react';
import iam from '../services/iam';

export default function useUser() {
  React.useEffect(() => {
    iam.init({});
  });
}
