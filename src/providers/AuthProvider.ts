import React from 'react';

// export type AuthContextProps = { theme: Theme; toggleTheme?: () => void } | null;

// TODO - only use a subset of the properties on the firebase.User returned by firebase.auth
// export interface IAuthUser {
//   uid: string;
//   email: string;
//   displayName: string;
//   refreshToken: string;
//   emailVerified: string;
//   photoURL: string;
//   phoneNumber: string;
//   isAnonymous: string;
//   metadata: string;
// }

interface IContextProps {
  authUser: firebase.User | null;
}

const AuthUserContext: React.Context<IContextProps> = React.createContext<IContextProps>({
  authUser: null,
});

export default AuthUserContext;
