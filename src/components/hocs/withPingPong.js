import React, { useEffect } from 'react';
import ping from 'duck/actions/ping';

export default ComposedComponent => props => {
  useEffect(() => {
    ping();
    setInterval(() => {
      ping();
    }, 30000);
  }, []);
  return (
    <ComposedComponent {...props} />
  );
};
