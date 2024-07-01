import React, { useState } from 'react';
import {
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { HomeOutlined, ProjectOutlined, GiftOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { ButtonMenuContainer, StyledLink } from './Header.styled';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: <StyledLink to="/home">HOME</StyledLink>,
  },
  {
    key: '2',
    icon: <ProjectOutlined />,
    label: <StyledLink to="/project">PROJECT</StyledLink>,
  },
  {
    key: '3',
    icon: <GiftOutlined />,
    label: <StyledLink to="/rewards">REWARDS</StyledLink>,
  },
  {
    key: '4',
    icon: <MailOutlined />,
    label: <StyledLink to="/contact">CONTACT</StyledLink>,
  },
];

const MenuButton: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ButtonMenuContainer style={{ width: "100%", borderRadius: 12 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16, width: 46 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        style={{ borderRadius: 12 }}
      />
    </ButtonMenuContainer>
  );
};

export default MenuButton;
