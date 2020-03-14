import React, { Component, ErrorInfo } from 'react';
import { Link } from 'react-router-dom';
import { isDev } from '../constants/config';
import { Typography } from 'antd';
const { Title } = Typography;
export interface IProps {
  error: Error;
  errorInfo: ErrorInfo | null | undefined;
}

const ErrorDetails: React.FC<IProps> = ({ error, errorInfo }) => (
  <details style={{ whiteSpace: 'pre-wrap' }}>
    {error && error.toString()}
    <br />
    {errorInfo && errorInfo.componentStack}
  </details>
);

interface IState {
  error: Error | null;
  errorInfo: ErrorInfo | null | undefined;
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  readonly state: IState = {
    error: null,
    errorInfo: null,
    hasError: false,
  };

  public static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo?: ErrorInfo) {
    console.error(error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  public render() {
    if (this.state.hasError && this.state.error) {
      return (
        <>
          <Title>Something went wrong.</Title>
          Click <Link to="/">here</Link> to go back home.
          {isDev && <ErrorDetails error={this.state.error} errorInfo={this.state.errorInfo} />}
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
