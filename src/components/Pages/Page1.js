import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Content from './Content';
import { Steps } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'Start',
    description: 'This is start'
  },
   {
     title: 'Continue',
     description: 'You are here'
   },
   {
     title: 'Finished',
     description: 'Wait till finish'
   }
 ];

 const PageBody = ({ title }) => (
  <Content
    title={title}
    steps={steps}
  >
    <Steps current={0} direction="vertical">
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