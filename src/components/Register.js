import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

// import { auth } from '../auth';

// function setErrorMsg(error) {
//   return {
//     registerError: error.message,
//   }
// }

class Register extends Component {
  state = { registerError: null };

  handleSubmit = (e) => {
    alert("thanks for registering");
    e.preventDefault();
    // auth(this.email.value, this.pw.value)
    //   .catch(e => this.setState(setErrorMsg(e)))
  };

  render () {
    return (
      <Container className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              className="form-control"
              ref={(email) => this.email = email}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Password"
              ref={(pw) => this.pw = pw}
            />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </Container>
    )
  }
}

export default Register;
