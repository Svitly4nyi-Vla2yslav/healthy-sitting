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
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { DonatButton } from '../ContentHomePage/HomeComponent.styled';
import LanguageMenu from '../LanguageSelector/LanguageSelector';

type Anchor = 'top';

export const MenuButton: React.FC = () => {
  const { t } = useTranslation();
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
    { to: '/home', text: t('Header.home'), icon: <HomeIcon /> },
    { to: '/about', text: t('Header.about'), icon: <InfoIcon /> },
    { to: '/project', text: t('Header.project'), icon: <ProjectIcon /> },
    { to: '/help', text: t('Header.rewards'), icon: <RewardsIcon /> },
    { to: '/contact', text: t('Header.contact'), icon: <ContactIcon /> },
    {
      to: '',
      text: t(''),
      icon: (
        <Link to="/contact">
        <DonatButton
          data-aos="fade-right"
          style={{ margin: 0, marginRight: 10 }}
        >
          {t('Header.order')}
        </DonatButton>
      </Link>
      ),
    },
    { to: '#', text: t(''), icon: <LanguageMenu /> },
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ bgcolor: '#000' }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((link) => (
          <ListItem key={link.to} disablePadding>
            <ListItemButton
              style={{
                color: '#00baff',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ListItemIcon style={{ color: '#00baff' }}>
                {link.icon}
              </ListItemIcon>
              <StyledLink to={link.to} data-translate={link.text}>
                {link.text}
              </StyledLink>
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
          <Button
            onClick={toggleDrawer(anchor, true)}
            data-aos="zoom-in"
            style={{
              fontSize: 20,
              padding: 0,
            }}
          >
            {t('MenuButton.menu')}
          </Button>
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
