import React from 'react';

interface IContextProps {
  authUser: firebase.User | null;
}

const AuthUserContext: React.Context<IContextProps> = React.createContext<IContextProps>({
  authUser: null,
});

export default AuthUserContext;
