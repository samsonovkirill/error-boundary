import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Content from './Pages/Content';

const ContentFailed = () => (
  <ErrorBoundary errorMessage="Only content area crashed 3">
    <Content
      title="Link 3 content page"
      steps={null}
    />
  </ErrorBoundary>
)

export default ContentFailed;