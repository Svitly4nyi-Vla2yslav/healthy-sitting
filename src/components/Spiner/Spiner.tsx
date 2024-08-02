import React from 'react';
import { Flex, Spin } from 'antd';
import 'antd/dist/reset.css'; 

export const Spiner: React.FC = () => (
  <Flex  justify="center" align="center" style={{ height: '100vh' }}>
   
    <Spin size="large" />
  </Flex>
);

