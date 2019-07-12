import * as React from 'react';

import {firebaseAuth} from '../database';
import AuthUserContext from '../providers/AuthProvider';

// TODO - make this a hook
const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null,
    };
    listener: any;
    componentDidMount() {
      this.listener = firebaseAuth.onAuthStateChanged(authUser => {
        if (authUser) {
          // only using some of the user properties returned by firebase
          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            refreshToken: authUser.refreshToken,
            emailVerified: authUser.emailVerified,
            photoURL: authUser.photoURL,
            phoneNumber: authUser.phoneNumber,
            isAnonymous: authUser.isAnonymous,
            metadata: authUser.metadata,
          };
        } else {
          authUser = null;
        }

        this.setState({authUser});
      });
    }
    componentWillUnmount() {
      this.listener();
    }
    setUserState = (userState = null) => {
      this.setState({
        userState,
      });
    };
    render() {
      const authState = {
        authUser: this.state.authUser,
        setUser: this.setUserState,
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
