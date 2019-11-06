import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Content = ({ title, children }) => (
  <div className="content-wrapper">
    <Title level={2}>{title}</Title>
    {children}
  </div>
);

export default Content;