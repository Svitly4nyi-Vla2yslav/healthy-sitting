import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Language from '@mui/icons-material/Language';
import i18n from '../../i18n';
import styled from 'styled-components';

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' },
  { value: 'ua', label: 'Українська' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' }
];

const ITEM_HEIGHT = 48;

const StyledIconButton = styled(IconButton)`
  transition: background 1.9s ease-in-out;
  background: linear-gradient(90deg, #ff7f50, #1e90ff, #ff7f50, #1e90ff);
  background-size: 400% 400%;
  
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #ff7f50, #1e90ff, #ff7f50, #1e90ff);
    background-size: 400% 400%;
    animation: gradientAnimation 5s ease infinite;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const LanguageMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentLanguage = i18n.language;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  return (
    <div style={{ marginRight: "1%" }} data-aos="fade-up">
      <StyledIconButton
        aria-label="language"
        id="language-menu-button"
        aria-controls={open ? 'language-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Language style={{ fill: 'white'}} />
      </StyledIconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {LANGUAGE_OPTIONS.map(({ value, label }) => (
          <MenuItem
            key={value}
            selected={value === currentLanguage}
            onClick={() => changeLanguage(value)}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageMenu;
