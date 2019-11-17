import React from 'react';
import * as Sentry from '@sentry/browser';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SideNavigation from './components/SideNavigation';
import ActionPanel from './components/ActionPanel';
import ErrorBoundary from './components/ErrorBoundary';
import MainPage from './components/Pages/MainPage';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';
import Page3 from './components/Pages/Page3';

const { Header, Sider, Content } = Layout;

Sentry.init({dsn: "https://12345@sentry.io/12345"});


function App() {
  return (
    <Router>
      <Layout>
        <Sider width={200}>
          <SideNavigation />
        </Sider>
        <Layout>
          <Header>
            <ActionPanel />
          </Header>
          <Content>
            <Switch>
              <Route path="/link1">
                <Page1
                  title="Link 1 content page"
                  errorMessage="Page for link 1 crashed"
                />
              </Route>
              <Route path="/link2">
                <Page2
                  title="Link 2 content page"
                  errorMessage="Page for link 2 crashed"
                />
              </Route>
              <Route path="/link3">
                <Page3
                  title="Link 3 content page"
                  errorMessage="Page for link 3 crashed"
                />
              </Route>
              <Route path="/">
                <MainPage
                  title="Main page"
                  errorMessage="Only main page crashed"
                />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

const AppWithBoundary = () => (
  <ErrorBoundary errorMessage="Application has crashed">
    <App/>
  </ErrorBoundary>
)

export default AppWithBoundary;
