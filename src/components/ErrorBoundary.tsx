/* eslint-disable @typescript-eslint/indent */
import React, { ReactNode } from "react";
import { Result } from "antd";

interface IErrorBoundaryProps {
  children: ReactNode;
}
interface IErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (!hasError) {
      return <>{children}</>;
    }
    return (
      <Result
        status="warning"
        title="There was an error processing your request."
      />
    );
  }
}
