import React, { useEffect } from 'react';

export default ComposedComponent => props => {
  useEffect(() => {
    console.log('ping pong');
    setInterval(() => {
      console.log('ping-pong');
    }, 30000);
  }, []);
  return (
    <ComposedComponent {...props} />
  );
};
