import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Content from './Content';
import { Steps } from 'antd';

const { Step } = Steps;

const PageBody = ({ title, steps }) => (
  <Content title={title}>
    <Steps current={2} direction="vertical">
      {steps.map(({ title, description }) => (<Step title={title} description={description} />))}
    </Steps>
  </Content>
);

const Page = ({ errorMessage, title }) => (
  <ErrorBoundary errorMessage={errorMessage}>
    <PageBody title={title} />
  </ErrorBoundary>
);

export default Page;