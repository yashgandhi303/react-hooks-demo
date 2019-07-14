import * as React from 'react';
import {firebaseAuth} from '../database';
import AuthUserContext from '../providers/AuthProvider';

interface IWithAuthenticationState {
  // authUser: IAuthUser | null;
  authUser: firebase.User | null;
}

// TODO - make this a hook
const withAuthentication = <P extends object>(Component: React.ComponentType<P>) => {
  class WithAuthentication extends React.Component<P> {
    state: IWithAuthenticationState = {
      authUser: null,
    };
    listener: any;
    componentDidMount() {
      this.listener = firebaseAuth.onAuthStateChanged(authUser => {
        if (authUser) {
          // only using some of the user properties returned by firebase
          // authUser = {
          //   uid: authUser.uid,
          //   email: authUser.email,
          //   displayName: authUser.displayName,
          //   refreshToken: authUser.refreshToken,
          //   emailVerified: authUser.emailVerified,
          //   photoURL: authUser.photoURL,
          //   phoneNumber: authUser.phoneNumber,
          //   isAnonymous: authUser.isAnonymous,
          //   metadata: authUser.metadata,
          // };
          this.setState({
            authUser,
          });
        } else {
          this.setState({
            authUser: null,
          });
        }
      });
    }
    componentWillUnmount() {
      this.listener();
    }
    render() {
      const authState = {
        authUser: this.state.authUser,
      };
      return (
        <AuthUserContext.Provider value={authState}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;
};

export default withAuthentication;
