import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ProjectIcon from '@mui/icons-material/Work';
import RewardsIcon from '@mui/icons-material/CardGiftcard';
import ContactIcon from '@mui/icons-material/ContactMail';
import { StyledLink } from './Header.styled';

type Anchor = 'top';

export const MenuButton: React.FC = () => {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const links = [
    { to: '/home', text: 'HOME', icon: <HomeIcon /> },
    { to: '/about', text: 'ABOUT US', icon: <InfoIcon /> },
    { to: '/project', text: 'PROJECTS', icon: <ProjectIcon /> },
    { to: '/rewards', text: 'REWARDS', icon: <RewardsIcon /> },
    { to: '/contact', text: 'CONTACT', icon: <ContactIcon /> },
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ bgcolor: '#000' }}
      // role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((link) => (
          <ListItem key={link.to} disablePadding>
            {/* flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
} */}
            <ListItemButton
              style={{
                color: '#00baff',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 320
              }}
            >
              <ListItemIcon style={{ color: '#00baff' }}>
                {link.icon}
              </ListItemIcon>
              <StyledLink to={link.to}>{link.text}</StyledLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(['top'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

// import React, { useState } from 'react';
// import {
//   MailOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
// } from '@ant-design/icons';
// import { HomeOutlined, ProjectOutlined, GiftOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Button, Menu } from 'antd';
// import { ButtonMenuContainer, StyledLink } from './Header.styled';
import styled from '@emotion/styled';

// type MenuItem = Required<MenuProps>['items'][number];

// const items: MenuItem[] = [
//   {
//     key: '1',
//     icon: <HomeOutlined />,
//     label: <StyledLink to="/home">HOME</StyledLink>,
//   },
//   {
//     key: '2',
//     icon: <HomeOutlined />,
//     label: <StyledLink to="/about">ABOUT</StyledLink>,
//   },
//   {
//     key: '3',
//     icon: <ProjectOutlined />,
//     label: <StyledLink to="/project">PROJECT</StyledLink>,
//   },
//   {
//     key: '4',
//     icon: <GiftOutlined />,
//     label: <StyledLink to="/rewards">REWARDS</StyledLink>,
//   },
//   {
//     key: '5',
//     icon: <MailOutlined />,
//     label: <StyledLink to="/contact">CONTACT</StyledLink>,
//   },
// ];

// const MenuButton: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <ButtonMenuContainer
//     style={{ width: "100%",
//      borderRadius: 12,
//      display: 'flex',
//      alignItems: 'flex-end',
//      flexDirection: 'column'
//      }}>
//       <Button
//         type="primary"
//         onClick={toggleCollapsed}
//         style={{ marginBottom: 16, width: 46 }}
//       >
//         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//       </Button>
//       <Menu
//         defaultSelectedKeys={['1']}
//         mode="inline"
//         theme="dark"
//         inlineCollapsed={collapsed}
//         items={items}
//         style={{ borderRadius: 12 }}
//       />
//     </ButtonMenuContainer>
//   );
// };

// export default MenuButton;
