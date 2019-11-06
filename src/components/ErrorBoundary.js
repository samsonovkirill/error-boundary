import React from 'react';
import { Result, Button } from 'antd';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  }

  componentDidCatch(error) {
    // You can send errors to remote server here
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="warning"
          title={this.props.errorMessage}
          extra={
            <Button type="primary" key="console">
              Some action to recover
            </Button>
          }
  />
      );
    }
    return this.props.children;
  }
};

export default ErrorBoundary;