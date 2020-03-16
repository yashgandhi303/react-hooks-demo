import * as React from 'react';
import { firebaseAuth } from '../services/database';
import AuthUserContext from '../providers/AuthProvider';

interface IWithAuthenticationState {
  authUser: firebase.User | null;
  loading: boolean;
}

// TODO - make this a hook
const withAuthentication = <P extends object>(Component: React.ComponentType<P>) => {
  class WithAuthentication extends React.Component<P> {
    state: IWithAuthenticationState = {
      authUser: null,
      loading: true
    };
    listener: any;
    componentDidMount() {
      this.listener = firebaseAuth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
        this.setState({ loading: false });
      });
    }
    componentWillUnmount() {
      // unsubscribe the listener
      this.listener();
    }
    render() {
      const authState = { authUser: this.state.authUser };
      return (
        <>
          {!this.state.loading &&
            <AuthUserContext.Provider value={authState}>
              <Component {...this.props} />
            </AuthUserContext.Provider>
          }
        </>
      );
    }
  }

  return WithAuthentication;
};

export default withAuthentication;
