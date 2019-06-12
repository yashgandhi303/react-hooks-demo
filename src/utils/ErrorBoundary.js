import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isDev } from '../constants';

// props to https://codepen.io/gaearon/pen/wqvxGa?editors=0010 and https://reactjs.org/docs/error-boundaries.html

const ErrorDetails = ({ error, errorInfo }) => {
  return (
    <details style={{ whiteSpace: 'pre-wrap' }}>
      {error && error.toString()}
      <br />
      {errorInfo.componentStack}
    </details>
  )
};

class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          Click <Link to="/">here</Link> to go back home.
          { isDev && <ErrorDetails error={this.state.error} errorInfo={this.state.errorInfo} /> }
        </>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
