import React, { useState } from 'react';

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  return props.render(user);
};

export { AuthProvider };
