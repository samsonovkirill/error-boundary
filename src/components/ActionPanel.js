import React from 'react'
import { Button } from 'antd';
import { Row, Col } from 'antd';

const ActionPanel = () => (
  <Row>
    <Col span={4}>
      <Button
        type="primary"
        shape="round"
        size="large"
        onClick={() => console.log('action 1')}
      >
        Some action 1
      </Button>
    </Col>
    <Col span={4}>
    <Button
        type="primary"
        shape="round"
        size="large"
        onClick={() => console.log('action 2')}
      >
        Some action 2
      </Button>
    </Col>
    <Col span={4}>
    <Button
        type="primary"
        shape="round"
        size="large"
        onClick={() => console.log('action 3')}
      >
        Some action 3
      </Button>
    </Col>
  </Row>
);

export default ActionPanel;
