import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SideNavigation = () => (
  <>
    <Link to="/">
      <div className="logo" />
    </Link>
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1">
        <Link to="/link1">
          <Icon type="user" />
          <span>Link 1</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/link2">
          <Icon type="video-camera" />
          <span>Link 2</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/link3">
          <Icon type="upload" />
          <span>Link 3</span>
        </Link>
      </Menu.Item>
    </Menu>
  </>
);

export default SideNavigation;