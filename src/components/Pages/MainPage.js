import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Content from './Content';
import { Empty } from 'antd';

const PageBody = ({ title }) => (
  <Content title={title}>
    <Empty className="content-empty" />
  </Content>
);

const MainPage = ({ errorMessage, title }) => (
  <ErrorBoundary errorMessage={errorMessage}>
    <PageBody title={title} />
  </ErrorBoundary>
);

export default MainPage;