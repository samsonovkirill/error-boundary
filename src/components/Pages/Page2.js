import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Content from './Content';
import { Steps } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'Sign up',
    description: 'It is free'
  },
   {
     title: 'Log in',
     description: 'To identify'
   },
   {
     title: 'Use our up',
     description: 'No limits!'
   }
 ];

const PageBody = ({ title }) => (
  <Content
    title={title}
    steps={steps}
  >
    <Steps current={1} direction="vertical">
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